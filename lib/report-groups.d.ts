import type { Finding } from './report.js';
export interface ReportGroup {
    key: string;
    title: string;
    type: string;
    issues: Finding[][];
}
/** Only explicit OSV aliases join advisories; package grouping alone never deduplicates vulnerabilities. */
export declare function groupFindings(items: Finding[]): ReportGroup[];
export declare const priority: (items: Finding[]) => number;
