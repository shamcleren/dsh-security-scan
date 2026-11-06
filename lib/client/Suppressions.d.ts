import type { UiRemote } from '../ui-contract.js';
import { type LocaleKey } from './locales.js';
type Props = {
    remote: UiRemote;
    t(key: LocaleKey): string;
    busy: boolean;
    action(operation: () => Promise<void>): Promise<void>;
    notify(message: string): void;
};
/** Settings section for user exclusions; it loads independently so a broken list never hides other settings. */
export declare function Suppressions({ remote, t, busy, action, notify }: Props): import("react").JSX.Element;
export {};
