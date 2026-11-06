# Detection evaluation / 检出效果评测

This corpus measures the bundled deterministic source rules. It is original, synthetic, manually labelled data, licensed with the plugin under MIT. Never execute the fixtures. Dependencies referenced by the snippets are not installed or needed.

## Reproduce

Build the plugin, then run the **same release CLI** used for normal scans:

```sh
node lib/cli.js evaluate --semgrep /absolute/path/semgrep --runs 3 --output /tmp/evaluation-new.json --baseline evaluation/baseline.json
```

The command accepts only Semgrep CE **1.176.1**. A preinstalled scanner avoids toolchain downloads. Otherwise the CLI prepares the pinned scanner using the plugin toolchain manager. Scanning uses bundled rules, metrics off, version checks off, and isolated temporary state. There are no model, OSV, or application requests in the evaluation path. No model credentials are needed. Output paths must be new files. Source and packaged `evaluation/` assets must remain together with `lib/` and `rules/`.

## Labels and scoring

`manifest.json` records each file's language, relevant CWE, label and assumptions. There are 97 cases: 46 vulnerable and 51 safe. Every one of the 29 bundled rules has at least one vulnerable fixture it must detect, and most have a paired fixed version. Framework cases cover Flask, Django, Jinja2, Express, Koa, Next.js route handlers, React (`.jsx` / `.tsx`), net/http, Gin, html/template, database/sql and GORM. Hard negatives include trusted literals, module constants, sanitized HTML, bound SQL parameters, allow-list maps, fixed-origin requests, root-boundary path checks and Django's redirect host check. Known misses stay in the denominator: missing authorization (Python, TypeScript, Go), a Django IDOR, and SSRF that crosses a helper function.

- TP: a vulnerable file has at least one candidate for its labelled CWE.
- FN: a vulnerable file lacks a candidate for that CWE, including an unrelated candidate.
- FP: a safe file has any candidate. A sanitizer or trusted literal does not make the rule output a confirmed vulnerability.
- TN: a safe file has no candidates.

Each file is counted once; repeated candidates do not inflate TP. Precision = TP/(TP+FP), recall = TP/(TP+FN), F1 = 2TP/(2TP+FP+FN). Empty denominators are `null`. Results include per-language and per-CWE groups, per-case outcomes, corpus and rule SHA-256, scanner/plugin version, execution environment and timing samples. A corpus digest includes the labels and source bytes. New or missing fixture files, partial scans and changing outcomes between repeated runs cause an error.

`--baseline` accepts a previous full evaluation report for the **same corpus** and rejects mismatched labels/identities. Exit 1 means a previously detected vulnerable case was missed or a previously clean safe case became a false alarm. Existing false positives and false negatives remain visible; they do not silently disappear into a threshold. Exit 0 means the measurement completed and the requested comparison did not regress, **not** that every vulnerability was detected. Exit 2 means invalid input, scanner failure/version mismatch, incomplete coverage, or an incomparable baseline.

## Recorded result

On macOS arm64 / Node 26.7.0 with plugin 0.17.0, three actual runs produced the same outcomes: **TP 41, FN 5, FP 2, TN 49**, precision **95.3%**, recall **89.1%**, F1 **92.1%**. End-to-end samples including scanner startup were **1762 / 1629 / 1596 ms**, median **1629 ms**. See `baseline.json` for the complete machine-readable result.

The five misses are the authorization, IDOR and cross-function SSRF cases, which need call-graph or business context. The two false alarms are an HTML constant defined in a module variable (the rule does not resolve constant values) and an SSRF guarded by a parsed-hostname allow list (the taint rule does not model the check). These numbers say nothing about the quality of optional AI review.

0.17.0 changed the rules and the corpus together, so the previous baseline was replaced after reviewing every case instead of being compared. The 42 cases from 0.16 went from TP 16 / FN 4 / FP 6 / TN 16 to **TP 19 / FN 1 / FP 0 / TN 22**: new taint rules detect the earlier JS SQL injection, TypeScript SSRF and Go traversal misses, and literal-only arguments to shell, eval and HTML sinks are no longer reported. That literal exclusion is a deliberate rule change: a fixed string such as `subprocess.run("printf safe", shell=True)` cannot carry external input. It also means a sink fed through a constant variable is still reported. The 55 new cases were written by the same author at the same time as the new rules, so their 22 TP / 4 FN / 2 FP / 27 TN result is optimistic and not an independent measurement. No case was removed and the known misses stay in the denominator.

## Limits and contribution

This is a small, intentionally balanced synthetic set, with examples designed around the bundled rules. It is not an independent or representative benchmark of production repositories, exploitability, dependency vulnerability databases, secret detection, or AI accuracy. Do not present these figures as a universal detection rate or use them to rank another product without evaluating that product on the same labelled corpus and configuration. Three local samples are not a latency p95 or performance commitment.

Add original or suitably licensed cases with explicit trust and framework assumptions; add a vulnerable/fixed pair when possible. Keep known misses and hard negatives. When labels or fixtures change, deliberately regenerate and review the entire baseline; a corpus change must never auto-accept a new baseline in CI. When rules alone change, first compare against the existing baseline, inspect each changed case, then update the published report after review. Optional `SECURITY_TEST_SEMGREP` tests exercise this real corpus and its regression gate; without it the test is explicitly skipped.
