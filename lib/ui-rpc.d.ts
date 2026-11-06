import type { ConnectionRpcHandler } from '@deepseek-ai/dsh-client-connection';
import type { SecurityTasks } from './tasks.js';
/** Human-facing mutations use the public loopback Connection channel, not model tools. */
export declare function createSecurityRpc(ready: Promise<SecurityTasks>, log: (error: unknown) => void): (method: string, payload: unknown, signal: AbortSignal) => ReturnType<ConnectionRpcHandler>;
