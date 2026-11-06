import './message-source.js';
import { type Volatile, type Context } from '@deepseek-ai/cordis';
import z from '@deepseek-ai/schemastery';
export declare const name = "security-scan";
export declare const inject: string[];
export interface Config {
    semgrepPath?: string;
    gitleaksPath?: string;
    reportDirectory?: string;
    autoScan?: boolean;
    hookTools?: string[];
}
export declare const Config: z<NoInfer<Config>, NoInfer<Config>, "volatile">;
/** Register the read-only scanner and a review workflow on public DSH extension points. */
export declare function apply(ctx: Context, config?: Config | Volatile<Config>): void;
