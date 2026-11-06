import type { Context } from '@deepseek-ai/cordis';
import type { Finding, Report } from './report.js';
import type { ReportActions, Run } from './ui-contract.js';
export declare const findingItem: ({ id, title, file, line, severity, status, engine, endpoint, suppression }: Finding, suppressed?: boolean) => {
    endpoint?: string;
    id: string;
    title: string;
    file: string;
    line: number;
    severity: "high" | "medium" | "critical" | "low" | "info";
    status: "confirmed" | "needs-review" | "dismissed";
    suppressed: boolean;
    suppressible: boolean;
    category: "sourceRisk" | "dependencyRisk" | "secretRisk" | "dynamicRisk";
};
/** Absence is meaningful only with equivalent engines, policy and covered scope. AI IDs are per-run. */
export declare function compareFollowUp(previous: Report, current: Report): NonNullable<ReportActions['comparison']>;
/** Per-category repair playbook; scanner text stays quoted data, this is the trusted instruction. */
export declare function repairGuidance(item: Pick<Finding, 'engine' | 'cwe' | 'rule'>): string;
export declare function repairPrompt(report: Report, findings: Finding[], reportLink?: string, repair?: Run['repair'], round?: number): string;
/** The normal Host session owns execution and approvals after prompt admission. */
export declare function startRepair(native: Context, run: Run, report: Report, signal: AbortSignal, reportLink?: string): Promise<string>;
