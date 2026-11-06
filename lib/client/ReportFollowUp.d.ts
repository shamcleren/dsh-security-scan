import type { Run, UiRemote } from '../ui-contract.js';
import { type LocaleKey } from './locales.js';
type Props = {
    id: string;
    remote: UiRemote;
    t(key: LocaleKey): string;
    busy: boolean;
    runs: Run[];
    action(operation: () => Promise<void>): Promise<void>;
    openSession(id: string): void;
    showRuns(): void;
    openReport(id: string): void;
};
export declare function ReportFollowUp({ id, remote, t, busy, runs, action, openSession, showRuns, openReport }: Props): import("react").JSX.Element;
export {};
