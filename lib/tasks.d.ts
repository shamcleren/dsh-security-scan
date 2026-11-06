import { findingItem } from './follow-up.js';
import type { ScanSession } from './session.js';
import type { Toolchains } from './toolchains.js';
import { type AgentReviewOptions } from './agent.js';
import { audit } from './workflow.js';
import { type Finding } from './report.js';
import { manageHook } from './hooks.js';
import { type ReportActions, type Task, type TaskConfig, type Run, type ScanSettings, type UiState, type HookRequest, type ModelCatalog, type Suppression } from './ui-contract.js';
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
    private suppressionTail;
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
    private validated;
    save(input: TaskConfig, id?: string, revision?: number): Promise<Task>;
    /**
     * Conversation scans reuse one task per source and scope, so repeated requests share run history
     * and the previous-report baseline. Workbench tasks belong to the user and are never reused.
     */
    saveConversation(input: TaskConfig): Promise<Task>;
    /**
     * The task's newest readable report from a successful run, preferring complete coverage. Repair-branch
     * rescans scan other code and are skipped. Undefined means this is the task's first comparable scan.
     */
    private previousReport;
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
    /** Reports owned by one admitted repair session, oldest first: the repaired report and its rescans. */
    private repairReports;
    /**
     * Reports a conversation may act on, newest first: its repair chain, scans it started or observed, or an
     * explicitly named report of a local scan inside its workspace. Other conversations' reports stay out of reach.
     */
    private sessionReports;
    /** Resolve finding IDs to the newest reachable report containing each, for preview and exclusion. */
    exclusionTargets(sessionId: string, workspace: string | undefined, findingIds: string[], reportId?: string): Promise<Array<{
        reportId: string;
        finding: Finding;
    }>>;
    /** Actionable findings of a report for the conversation that owns it: not dismissed and not excluded by the user. */
    reportFindings(sessionId: string, workspace: string | undefined, requested?: string): Promise<{
        reportId: string;
        total: number;
        items: ReturnType<typeof findingItem>[];
    }>;
    /** Record findings a conversation verified as not worth fixing; the tool layer obtains the user's approval first. */
    excludeFromSession(sessionId: string, workspace: string | undefined, findingIds: string[], reason: string, reportId?: string): Promise<{
        added: number;
        existing: number;
    }>;
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
    private get suppressionFile();
    /** Serialize this process's writers; the file lock covers CLI and hook writers. */
    private suppressionWrite;
    suppress(reportId: string, findingIds: string[], reason: string): Promise<{
        added: number;
        existing: number;
    }>;
    unsuppress(id: string): Promise<void>;
    suppressions(): Promise<Suppression[]>;
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
