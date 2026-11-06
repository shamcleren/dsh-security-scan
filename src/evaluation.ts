import { readFile, lstat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { performance } from 'node:perf_hooks'
import { z } from 'zod'
import { hash } from './repository.js'
import { scanWorkspace, SEMGREP_VERSION } from './scanner.js'
import { PLUGIN_VERSION } from './report.js'

export const EvaluationCaseSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]{1,100}$/u),
  file: z.string().regex(/^[a-z0-9_/-]+\.(py|go|js|ts)$/u),
  language: z.enum(['python', 'go', 'javascript', 'typescript']),
  cwe: z.string().regex(/^CWE-\d+$/u), label: z.enum(['vulnerable', 'safe']), rationale: z.string().min(1).max(1000),
}).strict()
type Case = z.infer<typeof EvaluationCaseSchema>
const ManifestSchema = z.object({ version: z.literal(1), provenance: z.string(), cases: z.array(EvaluationCaseSchema).min(1).max(500) }).strict()
const OutcomeSchema = EvaluationCaseSchema.extend({ found: z.boolean(), matchedCwe: z.boolean(), rules: z.array(z.string()) })
const BaselineSchema = z.object({ corpusDigest: z.string().regex(/^[a-f0-9]{64}$/u), cases: z.array(OutcomeSchema).max(500) })
type Outcome = z.infer<typeof OutcomeSchema>

/** File-level candidate metrics against independently labelled source fixtures. */
export function scoreCases(cases: readonly Case[], findings: ReadonlyArray<{ file: string; cwe: string; rule: string }>) {
  if (new Set(cases.map(item => item.id)).size !== cases.length || new Set(cases.map(item => item.file)).size !== cases.length) throw new Error('Duplicate evaluation case identity')
  if (findings.some(item => !cases.some(test => test.file === item.file))) throw new Error('Finding outside evaluation corpus')
  const outcomes: Outcome[] = cases.map(item => {
    const found = findings.filter(finding => finding.file === item.file)
    return { ...item, found: found.length > 0, matchedCwe: found.some(finding => finding.cwe === item.cwe), rules: [...new Set(found.map(finding => finding.rule))].sort() }
  })
  const metrics = (items: readonly Outcome[]) => {
    const tp = items.filter(item => item.label === 'vulnerable' && item.matchedCwe).length
    const fn = items.filter(item => item.label === 'vulnerable' && !item.matchedCwe).length
    const fp = items.filter(item => item.label === 'safe' && item.found).length
    const tn = items.filter(item => item.label === 'safe' && !item.found).length
    const ratio = (n: number, d: number) => d ? n / d : null
    return { cases: items.length, tp, fn, fp, tn, precision: ratio(tp, tp + fp), recall: ratio(tp, tp + fn), f1: ratio(2 * tp, 2 * tp + fp + fn) }
  }
  return { summary: metrics(outcomes), byLanguage: Object.fromEntries([...new Set(cases.map(item => item.language))].sort().map(language => [language, metrics(outcomes.filter(item => item.language === language))])),
    byCwe: Object.fromEntries([...new Set(cases.map(item => item.cwe))].sort().map(cwe => [cwe, metrics(outcomes.filter(item => item.cwe === cwe))])), cases: outcomes }
}

export function evaluationRegressions(current: { corpusDigest: string; cases: readonly Outcome[] }, baseline: unknown): string[] {
  const previous = BaselineSchema.parse(baseline)
  if (current.corpusDigest !== previous.corpusDigest || current.cases.length !== previous.cases.length) throw new Error('Evaluation baseline uses a different corpus')
  const old = new Map(previous.cases.map(item => [item.id, item]))
  if (old.size !== previous.cases.length || current.cases.some(item => {
    const before = old.get(item.id)
    return !before || before.file !== item.file || before.label !== item.label || before.cwe !== item.cwe || before.language !== item.language
  })) throw new Error('Evaluation baseline case identities do not match')
  return current.cases.flatMap(item => {
    const before = old.get(item.id)!
    return item.label === 'vulnerable' && before.matchedCwe && !item.matchedCwe ? [item.id + ': new false negative']
      : item.label === 'safe' && !before.found && item.found ? [item.id + ': new false positive'] : []
  })
}

/** Runs scanner processes against data-only fixtures. No Agent, project execution, OSV or model requests. */
export async function evaluate(options: { semgrepPath: string; signal: AbortSignal; runs?: number; baseline?: unknown }) {
  const runs = z.number().int().min(1).max(10).parse(options.runs ?? 3)
  const root = fileURLToPath(new URL('../evaluation/', import.meta.url))
  const manifest = ManifestSchema.parse(JSON.parse(await readFile(join(root, 'manifest.json'), 'utf8')))
  const fingerprints: Array<[string, string]> = []
  for (const item of manifest.cases) {
    const path = join(root, 'cases', item.file), stat = await lstat(path)
    if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 64 * 1024) throw new Error('Invalid evaluation fixture')
    fingerprints.push([item.file, hash(await readFile(path))])
  }
  const corpusDigest = hash(JSON.stringify({ manifest, files: fingerprints }))
  const durations: number[] = []
  let scored: ReturnType<typeof scoreCases> | undefined
  for (let index = 0; index < runs; index++) {
    const start = performance.now()
    const result = await scanWorkspace({ workspace: join(root, 'cases'), semgrepPath: options.semgrepPath, signal: options.signal })
    durations.push(Math.round(performance.now() - start))
    if (result.status !== 'completed' || result.scannedFiles !== manifest.cases.length || result.findingsOmitted) throw new Error('Evaluation scan incomplete: ' + result.status)
    const next = scoreCases(manifest.cases, result.findings)
    if (scored && JSON.stringify(scored.cases) !== JSON.stringify(next.cases)) throw new Error('Evaluation outcomes changed between identical runs')
    scored = next
  }
  const sorted = [...durations].sort((a, b) => a - b)
  const result = { schemaVersion: 1, createdAt: new Date().toISOString(), pluginVersion: PLUGIN_VERSION, scanner: { name: 'semgrep-ce', version: SEMGREP_VERSION },
    corpusDigest, rulesDigest: hash(await readFile(new URL('../rules/baseline.yml', import.meta.url))), provenance: manifest.provenance,
    environment: { node: process.version, platform: process.platform, arch: process.arch },
    model: { enabled: false, requests: 0, tokens: 0 },
    timing: { runs, milliseconds: durations, medianMs: (sorted[Math.floor((runs - 1) / 2)]! + sorted[Math.floor(runs / 2)]!) / 2, minMs: sorted[0]!, maxMs: sorted.at(-1)! },
    ...scored!, limitations: ['Synthetic source fixtures; not a production vulnerability benchmark.', 'Metrics describe scanner candidates against labelled files, not confirmed exploitable vulnerabilities.', 'All vulnerable labels require a matching CWE; any candidate on a safe file counts as a false positive.', 'No application, fixture code, payload, model or dependency database query was executed. AI review quality is not measured.'],
  }
  return { ...result, regressions: options.baseline === undefined ? [] : evaluationRegressions(result, options.baseline) }
}
