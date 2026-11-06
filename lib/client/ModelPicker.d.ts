import type { ModelOption, UiRemote } from '../ui-contract.js';
import type { LocaleKey } from './locales.js';
type Selection = {
    provider: string;
    model: string;
};
export declare function modelChoices(models: ModelOption[], selected: Selection): Array<ModelOption & {
    saved?: boolean;
}>;
export declare function ModelPicker({ remote, value, defaultModel, onChange, t }: {
    remote: Pick<UiRemote, 'models'>;
    value: Selection;
    defaultModel?: Selection | null;
    onChange(value: Selection): void;
    t(key: LocaleKey): string;
}): import("react").JSX.Element;
export {};
