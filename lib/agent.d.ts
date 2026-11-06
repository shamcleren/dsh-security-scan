import { type EvidenceArchive } from './report-evidence.js';
import { type LlmCallConfig } from '@deepseek-ai/dsh-llm';
import type { Context } from '@deepseek-ai/cordis';
import type { Agent } from '@deepseek-ai/dsh-agent';
import { type Review, type AdditionalFinding } from './report.js';
import { type AgentPolicy, type AgentAudit } from './agent-contract.js';
export { redactText as redactAgentText } from './report-evidence.js';
type Selection = LlmCallConfig;
export interface AgentReviewOptions {
    reportFile: string;
    workspace: string;
    policy: AgentPolicy;
    signal: AbortSignal;
    native?: Context;
    selection?: Selection;
    preset?: {
        id: string;
        mount(ctx: Context): Promise<void>;
    };
    keepSession?: boolean;
    sessionId?: string;
    existingAgent?: Agent;
    prepare?(): Promise<string>;
    onSession?(id: string): Promise<void>;
    reportLink?: string;
    onComplete?(result: AgentReviewResult): Promise<{
        reportId: string;
        json: string;
        html: string;
    }>;
    onProgress?(audit: AgentAudit): Promise<void>;
}
export interface AgentReviewResult {
    evidenceArchive: EvidenceArchive;
    audit: AgentAudit;
    reviews: Review[];
    findings: AdditionalFinding[];
}
/** Deterministic review tools hosted by the public native Agent factory and session driver. */
export declare function runAgentReview(options: AgentReviewOptions): Promise<AgentReviewResult>;
