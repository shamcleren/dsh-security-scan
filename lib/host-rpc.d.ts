import type { Context } from '@deepseek-ai/cordis';
import { type ConnectionRpcHandler } from '@deepseek-ai/dsh-client-connection';
type RpcHandler = ConnectionRpcHandler;
/** Register a custom Connection-compatible channel on the consuming plugin fiber. */
export declare function registerHostRpc(ctx: Context, channel: string, handler: RpcHandler): void;
export {};
