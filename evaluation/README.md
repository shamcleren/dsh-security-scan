# Detection evaluation / 检出效果评测

This corpus measures the bundled deterministic source rules. It is original, synthetic, manually labelled data, licensed with the plugin under MIT. Never execute the fixtures. Dependencies referenced by the snippets are not installed or needed.

## Reproduce

Build the plugin, then run the **same release CLI** used for normal scans:

```sh
node lib/cli.js evaluate --semgrep /absolute/path/semgrep --runs 3 --output /tmp/evaluation-new.json --baseline evaluation/baseline.json
```

The command accepts only Semgrep CE **1.176.1**. A preinstalled scanner avoids toolchain downloads. Otherwise the CLI prepares the pinned scanner using the plugin toolchain manager. Scanning uses bundled rules, metrics off, version checks off, and isolated temporary state. There are no model, OSV, or application requests in the evaluation path. No model credentials are needed. Output paths must be new files. Source and packaged `evaluation/` assets must remain together with `lib/` and `rules/`.

## Labels and scoring

`manifest.json` records each file's language, relevant CWE, label and assumptions. There are 16 vulnerable/fixed pairs spanning all 12 rule families and four languages, six harder safe cases (trusted literals or sanitized HTML), and four vulnerable cases outside the basic rules (authorization, traversal, JS SQL injection, SSRF). These known blind spots remain in the denominator.

- TP: a vulnerable file has at least one candidate for its labelled CWE.
- FN: a vulnerable file lacks a candidate for that CWE, including an unrelated candidate.
- FP: a safe file has any candidate. A sanitizer or trusted literal does not make the rule output a confirmed vulnerability.
- TN: a safe file has no candidates.

Each file is counted once; repeated candidates do not inflate TP. Precision = TP/(TP+FP), recall = TP/(TP+FN), F1 = 2TP/(2TP+FP+FN). Empty denominators are `null`. Results include per-language and per-CWE groups, per-case outcomes, corpus and rule SHA-256, scanner/plugin version, execution environment and timing samples. A corpus digest includes the labels and source bytes. New or missing fixture files, partial scans and changing outcomes between repeated runs cause an error.

`--baseline` accepts a previous full evaluation report for the **same corpus** and rejects mismatched labels/identities. Exit 1 means a previously detected vulnerable case was missed or a previously clean safe case became a false alarm. Existing false positives and false negatives remain visible; they do not silently disappear into a threshold. Exit 0 means the measurement completed and the requested comparison did not regress, **not** that every vulnerability was detected. Exit 2 means invalid input, scanner failure/version mismatch, incomplete coverage, or an incomparable baseline.

## Recorded result

On macOS arm64 / Node 26.7.0, three actual runs produced the same outcomes: **TP 16, FN 4, FP 6, TN 16**, precision **72.7%**, recall **80.0%**, F1 **76.2%**. End-to-end samples including scanner startup were **2363 / 1855 / 1845 ms**, median **1855 ms**. See `baseline.json` for the complete machine-readable result.

The misses are the four business/context cases. False alarms are the six trusted/sanitized examples. This is expected of broad sink rules and gives concrete targets for future improvements; it does not establish the quality of any optional AI review. No rules were weakened or cases removed to improve these numbers.

## Limits and contribution

This is a small, intentionally balanced synthetic set, with examples designed around the bundled rules. It is not an independent or representative benchmark of production repositories, exploitability, dependency vulnerability databases, secret detection, or AI accuracy. Do not present these figures as a universal detection rate or use them to rank another product without evaluating that product on the same labelled corpus and configuration. Three local samples are not a latency p95 or performance commitment.

Add original or suitably licensed cases with explicit trust and framework assumptions; add a vulnerable/fixed pair when possible. Keep known misses and hard negatives. When labels or fixtures change, deliberately regenerate and review the entire baseline; a corpus change must never auto-accept a new baseline in CI. When rules alone change, first compare against the existing baseline, inspect each changed case, then update the published report after review. Optional `SECURITY_TEST_SEMGREP` tests exercise this real corpus and its regression gate; without it the test is explicitly skipped.
