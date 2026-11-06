import type { Agent } from '@deepseek-ai/dsh-agent';
import type { UserMessage, TurnEndReason } from '@deepseek-ai/dsh-session';
/** Queue one owned turn on a borrowed Agent. Never create/dispose the user's session. */
export declare function reviewInSession(agent: Agent, message: UserMessage, setup: () => void, release: () => void, signal: AbortSignal, onEnd: (reason: TurnEndReason) => void): Promise<void>;
