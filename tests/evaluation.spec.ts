import { readFile } from 'node:fs/promises'
import { expect, it, vi } from 'vitest'
import { evaluate, evaluationRegressions, scoreCases } from '../src/evaluation.js'
import { RULES } from '../src/rules.js'

const cases = [
  { id: 'detected', file: 'detected.py', label: 'vulnerable' as const }, { id: 'missed', file: 'missed.py', label: 'vulnerable' as const },
  { id: 'false-alarm', file: 'false_alarm.py', label: 'safe' as const }, { id: 'safe', file: 'safe.py', label: 'safe' as const },
].map(item => ({ ...item, language: 'python' as const, cwe: 'CWE-78', rationale: 'Independent scoring fixture.' }))
it('measures misses, false alarms, safe cases and duplicate candidates independently', () => {
  const result = scoreCases(cases, [{ file: 'detected.py', cwe: 'CWE-78', rule: 'shell' }, { file: 'detected.py', cwe: 'CWE-78', rule: 'shell' }, { file: 'false_alarm.py', cwe: 'CWE-78', rule: 'shell' }])
  expect(result.summary).toEqual({ cases: 4, tp: 1, fn: 1, fp: 1, tn: 1, precision: 0.5, recall: 0.5, f1: 0.5 })
  expect(result.byLanguage.python).toEqual(result.summary)
  expect(result.cases[0]!.rules).toEqual(['shell'])
  expect(scoreCases([cases[0]!], [{ file: 'detected.py', cwe: 'CWE-89', rule: 'wrong-risk' }]).summary.fn).toBe(1)
  expect(scoreCases([cases[3]!], []).summary.precision).toBeNull()
})
it('rejects out-of-corpus results and duplicate case identities', () => {
  expect(() => scoreCases(cases, [{ file: 'outside.py', cwe: 'CWE-78', rule: 'shell' }])).toThrow('outside')
  expect(() => scoreCases([...cases, cases[0]!], [])).toThrow('Duplicate')
})
it('detects quality regressions against the same corpus without disguising existing misses', () => {
  const corpusDigest = 'a'.repeat(64)
  const before = { corpusDigest, ...scoreCases(cases, [{ file: 'detected.py', cwe: 'CWE-78', rule: 'shell' }]) }
  const after = { corpusDigest, ...scoreCases(cases, [{ file: 'false_alarm.py', cwe: 'CWE-78', rule: 'shell' }]) }
  expect(evaluationRegressions(after, before)).toEqual(['detected: new false negative', 'false-alarm: new false positive'])
  expect(() => evaluationRegressions({ ...after, corpusDigest: 'b'.repeat(64) }, before)).toThrow('different corpus')
  expect(() => evaluationRegressions(after, { ...before, cases: before.cases.map(item => ({ ...item, id: 'duplicate' })) })).toThrow('identities')
})

it('runs the published corpus through real Semgrep and preserves its measured baseline without model or OSV requests', { skip: !process.env.SECURITY_TEST_SEMGREP, timeout: 120000 }, async () => {
  const baseline: unknown = JSON.parse(await readFile(new URL('../evaluation/baseline.json', import.meta.url), 'utf8'))
  const fetcher = vi.fn(() => { throw new Error('Evaluation must not call model or OSV HTTP APIs') })
  vi.stubGlobal('fetch', fetcher)
  try {
    const result = await evaluate({ semgrepPath: process.env.SECURITY_TEST_SEMGREP!, signal: new AbortController().signal, runs: 1, baseline })
    expect(result.regressions).toEqual([])
    expect(result.summary.cases).toBe(97)
    // Every bundled rule has at least one labelled vulnerable fixture that it detects.
    expect(new Set(result.cases.filter(item => item.label === 'vulnerable' && item.matchedCwe).flatMap(item => item.rules))).toEqual(new Set(Object.keys(RULES)))
    // Known misses (authorization, cross-function SSRF) and unmodelled guards stay in the denominator.
    expect(result.cases.filter(item => item.label === 'vulnerable' && !item.matchedCwe).map(item => item.id).sort()).toEqual(['go-missing-authorization', 'python-django-idor', 'python-missing-authorization', 'python-ssrf-helper', 'ts-missing-authorization'])
    expect(result.cases.filter(item => item.label === 'safe' && item.found).map(item => item.id).sort()).toEqual(['js-ssrf-host-allowlist', 'ts-constant-html'])
    expect(result.summary.fn).toBeGreaterThan(0)
    expect(result.summary.fp).toBeGreaterThan(0)
    expect(result.model).toEqual({ enabled: false, requests: 0, tokens: 0 })
    expect(fetcher).not.toHaveBeenCalled()
  } finally { vi.unstubAllGlobals() }
})
