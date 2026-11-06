import { type Finding, type Report } from './report.js';
type Engine = Report['engines'][number];
export declare const DYNAMIC_VERSION = "baseline-v1";
/** Read-only runtime baseline: fixed same-origin GET requests, bounded bodies, no payloads or credentials. */
export declare function scanDynamic(target: string, signal: AbortSignal, fetcher?: typeof fetch): Promise<{
    engine: Engine;
    findings: Finding[];
    target: string;
}>;
/** Runtime findings compare only with a saved report that checked the same URL completely. */
export declare function mergeDynamic(report: Report, dynamic: Awaited<ReturnType<typeof scanDynamic>>, baseline?: Report): Report;
export {};
