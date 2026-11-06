import { z } from 'zod';
export declare const EvaluationCaseSchema: z.ZodObject<{
    id: z.ZodString;
    file: z.ZodString;
    language: z.ZodEnum<{
        python: "python";
        go: "go";
        javascript: "javascript";
        typescript: "typescript";
    }>;
    cwe: z.ZodString;
    label: z.ZodEnum<{
        vulnerable: "vulnerable";
        safe: "safe";
    }>;
    rationale: z.ZodString;
}, z.core.$strict>;
type Case = z.infer<typeof EvaluationCaseSchema>;
declare const OutcomeSchema: z.ZodObject<{
    id: z.ZodString;
    file: z.ZodString;
    language: z.ZodEnum<{
        python: "python";
        go: "go";
        javascript: "javascript";
        typescript: "typescript";
    }>;
    cwe: z.ZodString;
    label: z.ZodEnum<{
        vulnerable: "vulnerable";
        safe: "safe";
    }>;
    rationale: z.ZodString;
    found: z.ZodBoolean;
    matchedCwe: z.ZodBoolean;
    rules: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
type Outcome = z.infer<typeof OutcomeSchema>;
/** File-level candidate metrics against independently labelled source fixtures. */
export declare function scoreCases(cases: readonly Case[], findings: ReadonlyArray<{
    file: string;
    cwe: string;
    rule: string;
}>): {
    summary: {
        cases: number;
        tp: number;
        fn: number;
        fp: number;
        tn: number;
        precision: number | null;
        recall: number | null;
        f1: number | null;
    };
    byLanguage: {
        [k: string]: {
            cases: number;
            tp: number;
            fn: number;
            fp: number;
            tn: number;
            precision: number | null;
            recall: number | null;
            f1: number | null;
        };
    };
    byCwe: {
        [k: string]: {
            cases: number;
            tp: number;
            fn: number;
            fp: number;
            tn: number;
            precision: number | null;
            recall: number | null;
            f1: number | null;
        };
    };
    cases: {
        id: string;
        file: string;
        language: "python" | "go" | "javascript" | "typescript";
        cwe: string;
        label: "vulnerable" | "safe";
        rationale: string;
        found: boolean;
        matchedCwe: boolean;
        rules: string[];
    }[];
};
export declare function evaluationRegressions(current: {
    corpusDigest: string;
    cases: readonly Outcome[];
}, baseline: unknown): string[];
/** Runs scanner processes against data-only fixtures. No Agent, project execution, OSV or model requests. */
export declare function evaluate(options: {
    semgrepPath: string;
    signal: AbortSignal;
    runs?: number;
    baseline?: unknown;
}): Promise<{
    regressions: string[];
    limitations: string[];
    summary: {
        cases: number;
        tp: number;
        fn: number;
        fp: number;
        tn: number;
        precision: number | null;
        recall: number | null;
        f1: number | null;
    };
    byLanguage: {
        [k: string]: {
            cases: number;
            tp: number;
            fn: number;
            fp: number;
            tn: number;
            precision: number | null;
            recall: number | null;
            f1: number | null;
        };
    };
    byCwe: {
        [k: string]: {
            cases: number;
            tp: number;
            fn: number;
            fp: number;
            tn: number;
            precision: number | null;
            recall: number | null;
            f1: number | null;
        };
    };
    cases: {
        id: string;
        file: string;
        language: "python" | "go" | "javascript" | "typescript";
        cwe: string;
        label: "vulnerable" | "safe";
        rationale: string;
        found: boolean;
        matchedCwe: boolean;
        rules: string[];
    }[];
    schemaVersion: number;
    createdAt: string;
    pluginVersion: "0.18.0";
    scanner: {
        name: string;
        version: string;
    };
    corpusDigest: string;
    rulesDigest: string;
    provenance: string;
    environment: {
        node: string;
        platform: NodeJS.Platform;
        arch: NodeJS.Architecture;
    };
    model: {
        enabled: boolean;
        requests: number;
        tokens: number;
    };
    timing: {
        runs: number;
        milliseconds: number[];
        medianMs: number;
        minMs: number;
        maxMs: number;
    };
}>;
export {};
