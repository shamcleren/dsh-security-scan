import type { RepairWorkspace } from './ui-contract.js';
/** Only credential-free repository identities are exposed to the UI and model. */
export declare function repairRepositoryUrl(remote: string): string;
export declare function previewRepair(target: string, signal: AbortSignal): Promise<{
    repository: string;
    repositoryUrl: string;
    base: string;
    commit: string;
    revision: string;
}>;
export declare function planRepair(target: string, root: string, requestId: string, identity: string, expectedRevision: string | undefined, signal: AbortSignal): Promise<RepairWorkspace>;
export declare function validateRepairWorkspace(workspace: RepairWorkspace, signal: AbortSignal): Promise<void>;
/** The saved plan owns the path and branch. Retries never remove or replace existing work. */
export declare function prepareRepairWorkspace(workspace: RepairWorkspace, root: string, requestId: string, signal: AbortSignal): Promise<void>;
export declare function validateRepairUrl(workspace: RepairWorkspace, value: string): string;
