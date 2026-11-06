import { type TaskConfig, type ScanSettings, type UiRemote } from '../ui-contract.js';
import { type LocaleKey } from './locales.js';
type Translate = (key: LocaleKey) => string;
type Editor = {
    id?: string;
    revision?: number;
    config: TaskConfig;
};
export interface WorkbenchDraft {
    editor?: Editor;
    originalEditor?: string;
    settings?: ScanSettings;
    tab?: 'tasks' | 'runs' | 'reports' | 'settings';
}
export declare function Workbench({ remote, t, close, openSession, requestedReport, embedded, draft }: {
    remote: UiRemote;
    requestedReport?: string;
    embedded?: boolean;
    draft?: WorkbenchDraft;
    t: Translate;
    close(): void;
    openSession(id: string): void;
}): import("react").JSX.Element;
export {};
