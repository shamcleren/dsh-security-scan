import type { Context } from '@deepseek-ai/cordis';
export declare const name = "security-audit-preset";
export declare const inject: string[];
/** Mount official model tools in the owned preset scope; host sandbox and approval services remain authoritative. */
export declare function apply(ctx: Context): Promise<void>;
