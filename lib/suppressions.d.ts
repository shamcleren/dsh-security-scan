import { type Finding, type Report } from './report.js';
import { type Suppression } from './ui-contract.js';
export declare class SuppressionError extends Error {
    readonly code: string;
    constructor(code: string);
}
export declare const SUPPRESSION_LIMIT = 5000;
/** Kept beside tasks.json but in its own file, so the CLI, Git hooks and the plugin share one list. */
export declare const defaultSuppressionsFile: () => string;
/** AI findings receive random fingerprints per run and cannot be matched in a later scan. */
export declare const suppressible: (finding: Pick<Finding, "engine">) => boolean;
export declare function readSuppressions(file: string): Promise<Suppression[]>;
/** Record the selected findings of one report as false positives for that repository. Repeating a decision is a no-op. */
export declare function addSuppressions(file: string, report: Report, findingIds: string[], reason: string, now?: Date): Promise<{
    added: number;
    existing: number;
}>;
export declare function removeSuppression(file: string, id: string): Promise<void>;
/** Find the user's decision for a finding; renamed files intentionally stop matching. */
export declare function suppressionFor(items: readonly Suppression[], identity: string): (finding: Finding) => Suppression | undefined;
/** Mark matching findings dismissed while keeping their fingerprints for baseline comparison. */
export declare function applySuppressions(report: Report, items: readonly Suppression[], identity?: string): Report;
