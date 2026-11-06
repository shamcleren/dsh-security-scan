import { type Scope } from './repository.js';
import { type Report } from './report.js';
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
}
export declare function compare(report: Report, baseline: Report, renames?: Record<string, string>): Report;
export declare function audit(options: AuditOptions): Promise<{
    report: Report;
    json: string;
    html: string;
}>;
