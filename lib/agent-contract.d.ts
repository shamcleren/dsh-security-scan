/** Shared configuration and audit metadata; safe to import in the browser. */
import { z } from 'zod';
export declare const AgentPolicySchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    provider: z.ZodDefault<z.ZodString>;
    model: z.ZodDefault<z.ZodString>;
    maxSteps: z.ZodOptional<z.ZodNumber>;
    maxMinutes: z.ZodOptional<z.ZodNumber>;
    maxTokens: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export type AgentPolicy = z.infer<typeof AgentPolicySchema>;
export declare const ReviewAreaSchema: z.ZodEnum<{
    "entry-points": "entry-points";
    authentication: "authentication";
    authorization: "authorization";
    injection: "injection";
    "data-exposure": "data-exposure";
    "business-logic": "business-logic";
}>;
export declare const AgentEventSchema: z.ZodObject<{
    step: z.ZodNumber;
    kind: z.ZodEnum<{
        planning: "planning";
        listing: "listing";
        reading: "reading";
        reviewing: "reviewing";
        rejected: "rejected";
        finished: "finished";
    }>;
    files: z.ZodDefault<z.ZodArray<z.ZodString>>;
    code: z.ZodOptional<z.ZodString>;
    count: z.ZodDefault<z.ZodNumber>;
}, z.core.$strict>;
export declare const AgentAuditSchema: z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        incomplete: "incomplete";
    }>;
    reason: z.ZodEnum<{
        completed: "completed";
        "step-limit": "step-limit";
        "time-limit": "time-limit";
        "context-limit": "context-limit";
        "output-limit": "output-limit";
        "model-unavailable": "model-unavailable";
        "preset-unavailable": "preset-unavailable";
        "model-failed": "model-failed";
        "invalid-response": "invalid-response";
        "evidence-unavailable": "evidence-unavailable";
        cancelled: "cancelled";
    }>;
    preset: z.ZodOptional<z.ZodString>;
    nativeEnd: z.ZodOptional<z.ZodString>;
    nativeErrorCode: z.ZodOptional<z.ZodString>;
    provider: z.ZodString;
    model: z.ZodString;
    steps: z.ZodNumber;
    areas: z.ZodArray<z.ZodEnum<{
        "entry-points": "entry-points";
        authentication: "authentication";
        authorization: "authorization";
        injection: "injection";
        "data-exposure": "data-exposure";
        "business-logic": "business-logic";
    }>>;
    files: z.ZodArray<z.ZodString>;
    eligibleCandidates: z.ZodOptional<z.ZodNumber>;
    excludedCandidates: z.ZodOptional<z.ZodNumber>;
    reviewedFindings: z.ZodNumber;
    additionalFindings: z.ZodDefault<z.ZodNumber>;
    inputTokens: z.ZodNumber;
    outputTokens: z.ZodNumber;
    cacheReadTokens: z.ZodDefault<z.ZodNumber>;
    cacheWriteTokens: z.ZodDefault<z.ZodNumber>;
    usageAvailable: z.ZodBoolean;
    events: z.ZodArray<z.ZodObject<{
        step: z.ZodNumber;
        kind: z.ZodEnum<{
            planning: "planning";
            listing: "listing";
            reading: "reading";
            reviewing: "reviewing";
            rejected: "rejected";
            finished: "finished";
        }>;
        files: z.ZodDefault<z.ZodArray<z.ZodString>>;
        code: z.ZodOptional<z.ZodString>;
        count: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type AgentAudit = z.infer<typeof AgentAuditSchema>;
export declare function formatTokenCount(value: number): string;
export declare function cacheHitPercent(inputTokens: number, cacheReadTokens: number): number | undefined;
/** Compact usage for lists: `24.1M tok · 缓存命中 98%`. Omits cache when the provider did not report reads. */
export declare function formatAgentUsage(audit: Pick<AgentAudit, 'usageAvailable' | 'inputTokens' | 'outputTokens' | 'cacheReadTokens'>, cacheHitLabel: string): string | undefined;
/** Official tools inherited by the audit executor from its preset. */
export declare const BASIC_AUDIT_TOOLS: readonly ["bash", "pwsh", "read", "write", "edit", "glob", "grep", "skill", "job_output", "job_list", "job_kill"];
