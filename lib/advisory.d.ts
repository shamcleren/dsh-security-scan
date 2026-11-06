import type { Finding } from './report.js';
export declare function osvJson(url: string, signal: AbortSignal, init?: RequestInit): Promise<unknown>;
/** Fetch each public advisory once; failure leaves the original candidate visible. */
export declare function enrichAdvisories(findings: Finding[], signal: AbortSignal): Promise<number>;
