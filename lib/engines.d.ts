import { type Snapshot } from './repository.js';
import type { Finding, Report } from './report.js';
type Engine = Report['engines'][number];
export declare const GITLEAKS_VERSION = "8.24.2";
export declare const recommendation: (rule: string) => string;
export declare function enrich(snapshot: Snapshot, item: {
    rule: string;
    file: string;
    line: number;
    title: string;
    cwe: string;
    anchor?: string;
}, engine?: string): Promise<Finding>;
export declare function scanSecrets(snapshot: Snapshot, originalRoot: string, binaryName: string, signal: AbortSignal): Promise<{
    engine: Engine;
    findings: Finding[];
}>;
interface Dependency {
    name: string;
    version: string;
    ecosystem: 'npm' | 'Go' | 'PyPI';
    file: string;
    line?: number;
}
export declare function dependencies(snapshot: Snapshot): Promise<{
    packages: Dependency[];
    unsupported: string[];
    notes: string[];
}>;
/** Explicit opt-in sends only package names and versions to the official OSV API. */
export declare function scanDependencies(snapshot: Snapshot, signal: AbortSignal): Promise<{
    engine: Engine;
    findings: Finding[];
}>;
export {};
