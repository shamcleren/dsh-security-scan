import type { Context } from '@deepseek-ai/cordis';
import type { Run } from './ui-contract.js';
export interface ScanSession {
    start(run: Run, cwd: string, signal: AbortSignal): Promise<string>;
    publish(id: string, run: Run): Promise<void>;
}
/**
 * DSH lists a session and renders its transcript only after a first turn. The
 * trigger opens that turn; `admits` lets the pre-step hook empty the first step,
 * which the native loop skips, so the turn completes without a model request
 * and the trigger itself is never written to the transcript.
 */
export declare function firstTurnTrigger(name: string): {
    message: {
        source: {
            kind: "security-scan";
        };
        content: {
            type: "text";
            text: string;
        }[];
    } & Pick<import("@deepseek-ai/dsh-llm").UserMessage, "id" | "role">;
    admits: (messages: ReadonlyArray<{
        id: string;
    }>) => boolean;
};
/** Host-owned ordinary sessions; progress is plugin context, never a model prompt. */
export declare function scanSession(native: Context): ScanSession;
