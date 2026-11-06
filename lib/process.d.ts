/** Own the scanner process, bounded output, deadline, and descendant cleanup. */
export declare function runScanner(binary: string, args: string[], cwd: string, signal: AbortSignal, environment?: Record<string, string>, timeoutMs?: number): Promise<{
    code: number;
    stdout: string;
}>;
