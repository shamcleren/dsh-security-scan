# DSH Security Scan

A security scanning workbench for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH). It scans Python, Go and JavaScript/TypeScript projects, writes offline reports, hands selected findings to a DSH session for repair and rescans afterwards to confirm the result. Rule scans run locally and use no model tokens; AI review that traces the call chain is optional.

[中文](README.md) · [Guide](docs/guide.en.md) · [Evaluation](evaluation/README.md) · [Releases](https://github.com/shamcleren/dsh-security-scan/releases)

<!-- Screenshots and a demo video will be added: task list, report with repair panel, rescan comparison. -->

## Features

- **Static scanning without model tokens**: 29 bundled Semgrep rules for Flask, Django, Express, Koa, Next.js, React, Gin, Echo, net/http and common SQL/HTTP libraries, covering command injection, SQL injection, XSS, SSRF, path traversal, open redirects, unsafe deserialization, disabled TLS verification and unverified JWTs.
- **Secrets and dependencies**: Gitleaks finds likely credentials; OSV reports known dependency advisories for npm/pnpm lockfiles, go.sum, requirements and uv.lock.
- **Read-only runtime check**: at most 12 same-origin GET requests against a URL you authorize, checking security headers, cookie flags, CORS, debug pages and exposed `.git` / `.env` files.
- **Optional AI review**: your configured DSH model reads source, traces callers, confirms or dismisses candidates and adds business risks such as missing authorization. Every conclusion cites lines it actually read.
- **Repair loop**: select findings in a report and send them to a DSH session, which by default fixes and verifies them on a separate branch, then rescans and shows what remains for the next round.
- **False-positive exclusions**: excluded findings stay hidden in later scans and reappear when the code changes.
- **Reports and integrations**: offline HTML, JSON and SARIF; optionally only findings new relative to a target branch; the `dsh-security` CLI, Git hooks and CI reuse the same rules.

## Install

Requires official DSH **0.2.1-rc.5**. Other versions have not been verified.

```sh
dsh plugin --profile web add https://github.com/shamcleren/dsh-security-scan/releases/download/v0.17.1/shamcleren-dsh-security-scan-0.17.1.tgz
```

You can also paste this URL under **Plugins → Add plugin** in the DSH sidebar. For the official desktop app, replace `web` with the `desktop` profile you use. Restart DSH and open **Security Scan** in the upper sidebar. On first use the plugin downloads and verifies Semgrep, Gitleaks and a private Python into `~/.dsh/security-scan/toolchains/` without changing the system environment.

## First scan

1. Open **Security Scan** in the sidebar and create a task.
2. Choose a local directory or a Git repository and branch. For a rules-only scan without model tokens, turn off **Agentic AI**.
3. Save and run. Open the report from the report history, select findings and choose repair in a session or mark them as false positives.

You can also ask in a DSH session that has a project selected: “Use the security scan plugin to scan this project and review the candidates.” From the command line:

```sh
~/.dsh/profiles/web/node_modules/.bin/dsh-security scan --target /path/to/project
```

## Network and model use

| Check | Default | Network | Model tokens |
| --- | --- | --- | --- |
| Source rules | On | None (scanner setup downloads once) | No |
| Secret detection | On for new tasks | None | No |
| Dependency advisories | On for new tasks | Sends package names and versions to OSV, never source | No |
| Runtime check | Off; enabled when you enter a URL and confirm authorization | Only the URL you enter | No |
| AI review | On for new tasks | Sends selected source excerpts to the model configured in DSH | Yes |

The CLI and Git hooks never call a model. The plugin sends no telemetry and stores no API keys. Reports contain code excerpts and vulnerability locations; handle them according to your project's confidentiality rules.

## Results and limits

On the 97 bundled synthetic cases (46 vulnerable, 51 safe), rule candidates reach 95.3% precision and 89.1% recall; see the [evaluation](evaluation/README.md) for per-case results and how to reproduce them. The same author wrote the cases and the rules, so the figures are optimistic and do not describe detection rates on real projects. Rules analyze one function at a time and do not follow values across functions or files; missing authorization and similar business logic issues need AI review or a human. Findings are candidates to verify, and a clean scan does not prove the absence of vulnerabilities.

Installation and scanning are verified on macOS arm64. Scanner packages exist for macOS x64 and Linux (glibc 2.34 or later) but have not been tested on real machines; Windows has no managed scanner setup.

## More

- [Guide](docs/guide.en.md): scan scopes and baselines, reports, AI review, repair and rescans, exclusions, Git hooks, CI, scanners and dependency formats. The [Chinese guide](docs/guide.md) is the complete reference.
- [Contributing](CONTRIBUTING.md) · [Security policy](SECURITY.md) · [Third-party notices](THIRD_PARTY_NOTICES.md)

MIT licensed. Downloaded scanners follow their own upstream licenses.
