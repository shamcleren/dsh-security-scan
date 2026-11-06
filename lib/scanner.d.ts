export declare const SEMGREP_VERSION = "1.176.1";
export interface Finding {
    rule: string;
    file: string;
    line: number;
    cwe: string;
    title: string;
    status: 'needs-review';
    anchor?: string;
}
export interface ScanOptions {
    workspace: string;
    path?: string;
    files?: readonly string[];
    mode?: 'auto' | 'inventory' | 'semgrep';
    semgrepPath?: string;
    signal: AbortSignal;
}
export declare function executable(name: string, workspace: string): Promise<string | undefined>;
/** Read a bounded source snapshot; never invoke project code, hooks, or configuration. */
export declare function scanWorkspace(options: ScanOptions): Promise<{
    status: "inventory-only";
    coverage: {
        root: string;
        files: number;
        bytes: number;
        languages: string[];
        limited: boolean;
        skipped: Record<string, number>;
        inventory: {
            path: string;
            language: string;
        }[];
        inventoryOmitted: number;
    };
    rules: number;
    findings: Finding[];
    llmReviewRequired: boolean;
} | {
    status: "scanner-unavailable";
    guidance: string;
    coverage: {
        root: string;
        files: number;
        bytes: number;
        languages: string[];
        limited: boolean;
        skipped: Record<string, number>;
        inventory: {
            path: string;
            language: string;
        }[];
        inventoryOmitted: number;
    };
    rules: number;
    findings: Finding[];
    llmReviewRequired: boolean;
} | {
    status: "unsupported-scanner";
    guidance: string;
    coverage: {
        root: string;
        files: number;
        bytes: number;
        languages: string[];
        limited: boolean;
        skipped: Record<string, number>;
        inventory: {
            path: string;
            language: string;
        }[];
        inventoryOmitted: number;
    };
    rules: number;
    findings: Finding[];
    llmReviewRequired: boolean;
} | {
    status: "completed" | "partial" | "scanner-failed";
    scanner: {
        name: string;
        version: string;
    };
    scannedFiles: number;
    errors: number;
    failedBatches: number;
    findings: Finding[];
    findingsOmitted: number;
    coverage: {
        root: string;
        files: number;
        bytes: number;
        languages: string[];
        limited: boolean;
        skipped: Record<string, number>;
        inventory: {
            path: string;
            language: string;
        }[];
        inventoryOmitted: number;
    };
    rules: number;
    llmReviewRequired: boolean;
}>;
