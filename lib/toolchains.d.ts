import type { ToolchainState } from './ui-contract.js';
type Paths = {
    semgrepPath: string;
    gitleaksPath: string;
};
export declare const defaultToolchainRoot: () => string;
export declare const managedPath: (path: string | undefined, engine: "semgrep" | "gitleaks") => boolean;
/** Extract exactly one regular entry from an integrity-verified release, never archive paths. */
export declare function releaseBinary(archive: Buffer, expectedHash: string, entry: string): Buffer;
/** Waiters may cancel their scan without cancelling shared setup owned by the plugin lifetime. */
export declare function waitForSetup<T>(promise: Promise<T>, signal: AbortSignal): Promise<T>;
export declare class Toolchains {
    readonly root: string;
    private stateValue;
    private pending;
    private paths;
    private readonly controller;
    constructor(root?: string);
    state(): ToolchainState;
    private phase;
    setup(): Promise<Paths>;
    resolve(semgrepPath: string | undefined, gitleaksPath: string | undefined, signal: AbortSignal, needs: {
        semgrep: boolean;
        gitleaks: boolean;
    }): Promise<Paths>;
    close(): Promise<void>;
    private install;
}
export {};
