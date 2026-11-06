import type { UiWorkspace } from '@deepseek-ai/dsh-client-ui-workspace/client';
import type { ILayout } from '@deepseek-ai/dsh-client-ui-layout/client';
import { type LocaleKey } from './locales.js';
interface ClientContext {
    uiWorkspace?: Pick<UiWorkspace, 'openSession'>;
    layout: Pick<ILayout, 'selectPanel'>;
    effect(callback: () => unknown, label?: string): void;
    locale: {
        register(namespace: string, dictionaries: {
            zh: Record<string, string>;
            en: Record<string, string>;
        }): unknown;
        bind(namespace: string): (key: LocaleKey) => string;
    };
    connection: {
        rpc: {
            call<T>(channel: string, endpoint: string, payload: unknown): Promise<{
                ok: true;
                value: T;
            } | {
                ok: false;
                error: {
                    message: string;
                };
            }>;
        };
    };
    slots: {
        inject(slot: string, register: () => unknown): void;
        register(meta: Record<string, unknown>, component: (props: {
            size?: number;
        }) => unknown): unknown;
    };
}
export declare const name = "@shamcleren/dsh-security-scan";
export declare const inject: string[];
export declare function reportLinkId(href: string, current: string): string | undefined;
/** Use the host's global panel navigation; the selected conversation stays owned by DSH. */
export declare function apply(ctx: ClientContext): void;
export {};
