export declare const DEFAULT_EDIT_TOOLS: string[];
/** The official multi-command editor also has a read-only view operation. */
export declare function isConfiguredEdit(name: string, args: unknown, names: readonly string[]): boolean;
export declare function manageHook(options: {
    target: string;
    action: 'install' | 'remove';
    event: 'pre-commit' | 'pre-push';
    cli: string;
    output: string;
    semgrepPath: string;
    enforce: boolean;
    base?: string;
    signal: AbortSignal;
}): Promise<string>;
/** One owned job per workspace; coalesce edits and cancel all work on disposal. */
export declare class AuditQueue {
    private readonly run;
    private readonly failure;
    private readonly delay;
    private states;
    private stopped;
    readonly abort: AbortController;
    constructor(run: (workspace: string, signal: AbortSignal) => Promise<void>, failure: () => void, delay?: number);
    enqueue(workspace: string): void;
    stop(): Promise<void>;
}
