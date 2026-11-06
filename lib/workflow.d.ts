import { type Scope } from './repository.js';
import { type Report } from './report.js';
import type { Suppression } from './ui-contract.js';
export interface AuditOptions {
    target: string;
    url?: string;
    ref?: string;
    scope?: Scope;
    base?: string;
    baseline?: string;
    output?: string;
    engine?: 'auto' | 'semgrep' | 'inventory';
    semgrepPath?: string;
    gitleaksPath?: string;
    dependencies?: boolean;
    secrets?: boolean;
    /** Explicitly authorized HTTP(S) service for the read-only runtime baseline. */
    dynamicUrl?: string;
    fetcher?: typeof fetch;
    /** Internal JSON checkpoint, not a published report. */
    draft?: boolean;
    onProgress?: (phase: 'preparing' | 'scanning' | 'baseline' | 'dynamic' | 'report') => Promise<void>;
    view?: 'all' | 'new';
    failOn?: 'none' | 'high' | 'medium';
    signal: AbortSignal;
    /** The user's saved exclusions. `identity` lets repair worktrees match the original repository. */
    suppressions?: SuppressionInput;
    /** Repository identity to record when a repair worktree scans another path of the same repository. */
    identity?: string;
    /** The task compares with its previous report but has none yet; the report says so instead of "no baseline". */
    firstScan?: boolean;
}
export interface SuppressionInput {
    items: readonly Suppression[];
    identity?: string;
    unavailable?: boolean;
}
/** An unreadable list must not block scanning; the report says that exclusions were not applied. */
export declare function loadSuppressions(file: string): Promise<SuppressionInput>;
export declare function compare(report: Report, baseline: Report, renames?: Record<string, string>): Report;
export declare function audit(options: AuditOptions): Promise<{
    report: Report;
    json: string;
    html: string;
}>;
