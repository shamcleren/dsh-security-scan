import { createElement, useSyncExternalStore } from 'react';
import { Workbench } from './Workbench.js';
import { en, zh } from './locales.js';
import { SECURITY_CHANNEL, ReportActionsSchema, ModelCatalogSchema, SuppressionSchema, UiStateSchema } from '../ui-contract.js';
import { z } from 'zod';
export const name = '@shamcleren/dsh-security-scan';
export const inject = ['slots', 'locale', 'connection', 'uiWorkspace', 'layout'];
const namespace = 'security.workspace';
const panelId = 'security-scan';
export function reportLinkId(href, current) {
    try {
        const url = new URL(href, current), page = new URL(current);
        return url.origin === page.origin && url.pathname === page.pathname && /^#dsh-security-report=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u.test(url.hash) ? url.hash.slice('#dsh-security-report='.length) : undefined;
    }
    catch {
        return undefined;
    }
}
/** Use the host's global panel navigation; the selected conversation stays owned by DSH. */
export function apply(ctx) {
    ctx.effect(() => ctx.locale.register(namespace, { zh, en }), 'security-scan: client dictionaries');
    const t = ctx.locale.bind(namespace);
    const call = async (method, payload = {}) => {
        const result = await ctx.connection.rpc.call(SECURITY_CHANNEL, method, payload);
        if (!result.ok)
            throw new Error(result.error.message);
        return result.value;
    };
    const remote = {
        reportActions: async (id) => ReportActionsSchema.parse(await call('reportActions', { id })),
        repair: (id, findingIds, mode, expectedRevision) => call('repair', { id, findingIds, mode, expectedRevision }),
        rescan: id => call('rescan', { id }),
        continueRepair: id => call('continueRepair', { id }),
        models: async () => ModelCatalogSchema.parse(await call('models')),
        setup: () => call('setup'),
        state: async () => UiStateSchema.parse(await call('state')),
        save: (config, id, revision) => call('save', { config, ...(id ? { id, revision } : {}) }),
        removeRun: id => call('removeRun', { id }), removeReport: id => call('removeReport', { id }),
        remove: (id, revision) => call('remove', { id, revision }), run: (id, revision) => call('run', { id, revision }),
        cancel: id => call('cancel', { id }), settings: value => call('settings', value), hook: request => call('hook', request),
        source: (id, file, line) => call('source', { id, file, line }),
        report: (id, format) => call('report', { id, format }),
        suppress: (id, findingIds, reason) => call('suppress', { id, findingIds, reason }),
        suppressions: async () => z.array(SuppressionSchema).parse(await call('suppressions')),
        unsuppress: id => call('unsuppress', { id }),
    };
    let requestedReport;
    const draft = {};
    const clearDraft = () => { delete draft.editor; delete draft.settings; delete draft.originalEditor; delete draft.tab; };
    const listeners = new Set();
    const requestReport = (id) => { requestedReport = id; for (const listener of listeners)
        listener(); };
    const subscribe = (listener) => { listeners.add(listener); return () => listeners.delete(listener); };
    ctx.effect(() => () => { requestedReport = undefined; listeners.clear(); clearDraft(); }, 'security-scan: view state');
    ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: panelId, order: 10, locale: namespace, label: () => t('entry') }, ({ size = 18 }) => createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, 'aria-hidden': true }, createElement('path', { d: 'M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6L12 3Z' }), createElement('path', { d: 'm8 12 3 3 5-6' }))));
    function Surface() {
        const report = useSyncExternalStore(subscribe, () => requestedReport, () => requestedReport);
        return createElement(Workbench, { remote, t, embedded: true, draft, ...(report ? { requestedReport: report } : {}), close: () => { clearDraft(); requestReport(undefined); ctx.layout.selectPanel(null); }, openSession: (id) => { if (!ctx.uiWorkspace)
                throw new Error('scan-session-unavailable'); ctx.uiWorkspace.openSession(id); requestReport(undefined); } });
    }
    ctx.slots.inject('main', () => {
        const registration = ctx.slots.register({ name: 'main', key: panelId, locale: namespace }, Surface);
        ctx.effect(() => {
            if (typeof window === 'undefined')
                return;
            const open = (id) => { requestReport(id); ctx.layout.selectPanel(panelId); };
            const onHash = () => { const id = reportLinkId(location.href, location.href); if (id)
                open(id); };
            const onClick = (event) => {
                const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
                if (!link)
                    return;
                const id = reportLinkId(link.getAttribute('href'), location.href);
                if (id) {
                    event.preventDefault();
                    open(id);
                }
            };
            window.addEventListener('hashchange', onHash);
            document.addEventListener('click', onClick, true);
            onHash();
            return () => { window.removeEventListener('hashchange', onHash); document.removeEventListener('click', onClick, true); };
        }, 'security-scan: report links');
        return registration;
    });
}
