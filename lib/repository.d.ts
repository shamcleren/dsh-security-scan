export type Scope = 'full' | 'diff' | 'staged';
export declare const hash: (value: string | Buffer) => string;
export declare const inside: (root: string, path: string) => boolean;
export interface Snapshot {
    path: string;
    files: Record<string, string>;
    skipped: number;
    limited: boolean;
    digest: string;
    omissions?: Array<{
        file: string;
        reason: string;
    }>;
}
export interface Source {
    root: string;
    identity: string;
    commit?: string;
    baseCommit?: string;
    source: string;
    scope: Scope;
    current: Snapshot;
    previous?: Snapshot;
    changed: string[];
    renames: Record<string, string>;
    dispose(): Promise<void>;
}
export declare function git(root: string, args: string[], signal: AbortSignal, allowFailure?: boolean): Promise<string>;
export declare function validateRepositoryUrl(value: string): string;
/** Git applies nested ignore files, negation and global excludes; tracked files remain visible. */
export declare function gitVisibleFiles(root: string, signal: AbortSignal): Promise<Set<string> | undefined>;
/** No checkout, filters, submodules, project hooks, or dependency installation are executed. */
export declare function prepareSource(options: {
    target: string;
    url?: string;
    ref?: string;
    scope: Scope;
    base?: string;
    signal: AbortSignal;
}): Promise<Source>;
