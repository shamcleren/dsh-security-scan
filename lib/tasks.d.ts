import type { ScanSession } from './session.js';
import type { Toolchains } from './toolchains.js';
import { type AgentReviewOptions } from './agent.js';
import { audit } from './workflow.js';
import { manageHook } from './hooks.js';
import { type ReportActions, type Task, type TaskConfig, type Run, type ScanSettings, type UiState, type HookRequest, type ModelCatalog } from './ui-contract.js';
export declare class TaskError extends Error {
    readonly code: string;
    constructor(code: string);
}
interface Options {
    models?(): Promise<ModelCatalog>;
    reportLink?(id: string): string | undefined;
    session?(): ScanSession | undefined;
    toolchains?: Toolchains;
    root: string;
    settings(): ScanSettings;
    writable(): boolean;
    updateSettings(value: ScanSettings): Promise<void>;
    audit?: typeof audit;
    hook?: typeof manageHook;
    log(error: unknown): void;
    agentContext?(): Pick<AgentReviewOptions, 'native' | 'selection' | 'preset' | 'keepSession'>;
}
/** Persistent human-operated tasks, with one owned scan and bounded queued work. */
export declare class SecurityTasks {
    private readonly options;
    private readonly lock;
    private data;
    private tail;
    private runner;
    private abort;
    private runningId;
    private readonly repairs;
    private readonly publishingReports;
    private closed;
    private closing;
    private runnerFailed;
    private readonly dirtyTasks;
    private readonly hookControllers;
    private readonly ownedOperations;
    private readonly queue;
    private constructor();
    static open(options: Options): Promise<SecurityTasks>;
    private persist;
    private mutate;
    private assertOpen;
    private task;
    models(): Promise<ModelCatalog>;
    state(): Promise<UiState>;
    setup(): void;
    save(input: TaskConfig, id?: string, revision?: number): Promise<Task>;
    remove(id: string, revision: number): Promise<void>;
    removeRun(id: string): Promise<void>;
    removeReport(id: string): Promise<void>;
    start(id: string, revision: number, trigger?: Run['trigger'], sessionId?: string): Promise<Run>;
    rescan(reportId: string, trigger?: 'manual' | 'repair', session?: string): Promise<Run>;
    reportActions(id: string): Promise<ReportActions>;
    repair(id: string, findingIds: string[], mode: 'pr' | 'local', expectedRevision?: string): Promise<{
        sessionId: string;
    }>;
    private latestRescan;
    /** The repair that owns a report: the run itself, or the nearest ancestor through rescans. */
    private repairOrigin;
    /** Called from the repair session itself; rescans the newest report in that repair chain. */
    repairRescan(sessionId: string): Promise<Run>;
    /** Queue remaining and newly added findings from a rescan comparison into the original repair session. */
    continueRepair(reportId: string): Promise<{
        sessionId: string;
        count: number;
    }>;
    recordRepairDelivery(sessionId: string, url: string): Promise<void>;
    private kick;
    private drain;
    private publishSession;
    cancel(id: string, reason?: 'cancelled' | 'host-restarted'): Promise<void>;
    private reportLocation;
    report(id: string, format: 'html' | 'json'): Promise<string>;
    source(id: string, file: string, line: number, signal: AbortSignal): Promise<{
        content: string;
    }>;
    settings(input: ScanSettings): Promise<void>;
    hook(input: HookRequest): Promise<void>;
    edited(workspace: string): boolean;
    close(): Promise<void>;
}
export {};
