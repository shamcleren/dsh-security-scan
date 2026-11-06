/** Read the exact scanned evidence through the same bounded repository boundary. */
export declare function readEvidence(reportFile: string, requests: unknown, workspace: string, signal: AbortSignal): Promise<{
    reportId: string;
    commit: string | undefined;
    evidence: {
        file: string;
        content: string;
    }[];
    instruction: string;
}>;
