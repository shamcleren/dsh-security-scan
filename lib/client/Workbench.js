import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ReportFollowUp } from './ReportFollowUp.js';
import { ModelPicker } from './ModelPicker.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { newTask } from '../ui-contract.js';
import { formatAgentUsage } from '../agent-contract.js';
import { errorKey, enginePhaseKey, engineErrorKey, agentReasonKey } from './locales.js';
import { css } from './styles.js';
const isActive = (run) => ['queued', 'running', 'cancelling'].includes(run.status);
const phaseKey = (phase) => phase === 'baseline' ? 'baselinePhase' : phase === 'report' ? 'reportPhase' : phase;
const date = (value) => new Date(value).toLocaleString();
const usageLine = (audit, t) => audit ? formatAgentUsage(audit, t('cacheHit')) ?? '' : '';
const reportMeta = (item, t) => [date(item.createdAt), item.findings + ' ' + t('countSuffix'), item.agent?.model, usageLine(item.agent, t)].filter(Boolean).join(' · ');
function Field({ label, hint, children, wide = false }) {
    return _jsxs("label", { className: 'field' + (wide ? ' span' : ''), children: [_jsx("span", { children: label }), children, hint ? _jsx("span", { className: "muted", children: hint }) : null] });
}
function Check({ label, hint, value, onChange, required = false }) {
    return _jsxs("label", { className: "check", children: [_jsx("input", { type: "checkbox", required: required, checked: value, onChange: event => onChange(event.target.checked) }), _jsxs("span", { children: [label, hint ? _jsx("p", { className: "muted", children: hint }) : null] })] });
}
export function Workbench({ remote, t, close, openSession, requestedReport, embedded = false, draft }) {
    const [leave, setLeave] = useState();
    const originalEditor = useRef(draft?.originalEditor);
    const actionLock = useRef(false);
    const [pollError, setPollError] = useState(false);
    const [runFilter, setRunFilter] = useState('all');
    const [runSearch, setRunSearch] = useState('');
    const [tab, setTab] = useState(draft?.tab ?? 'tasks');
    const [state, setState] = useState();
    const [editor, setEditor] = useState(draft?.editor);
    const [settings, setSettings] = useState(draft?.settings);
    const [busy, setBusy] = useState(false), [error, setError] = useState(''), [notice, setNotice] = useState('');
    const [confirm, setConfirm] = useState();
    const [hookEvent, setHookEvent] = useState('pre-commit');
    const [hookAction, setHookAction] = useState('install'), [enforce, setEnforce] = useState(false);
    const [hookBase, setHookBase] = useState('');
    const [report, setReport] = useState();
    const frame = useRef(null);
    const [source, setSource] = useState();
    const [search, setSearch] = useState('');
    const [taskSearch, setTaskSearch] = useState('');
    const generation = useRef(0);
    const alive = useRef(true), panel = useRef(null), form = useRef(null);
    const urls = useRef(new Set());
    // Main panels unmount on navigation; retain only form drafts in this plugin instance.
    useEffect(() => {
        if (draft)
            Object.assign(draft, { editor, originalEditor: originalEditor.current, tab, settings: settings && (!state || JSON.stringify(settings) !== JSON.stringify(state.settings)) ? settings : undefined });
    }, [draft, editor, settings, state, tab]);
    const reload = useCallback(async () => {
        const current = ++generation.current;
        const next = await remote.state();
        if (alive.current && current === generation.current) {
            setPollError(false);
            setState(next);
            setSettings(current => current ?? next.settings);
        }
    }, [remote]);
    useEffect(() => {
        alive.current = true;
        const previous = document.activeElement;
        const keepFocus = (event) => { if (event.target instanceof Node && panel.current && !panel.current.contains(event.target))
            panel.current.querySelector('button:not(:disabled),input:not(:disabled)')?.focus(); };
        if (!embedded)
            document.addEventListener('focusin', keepFocus);
        panel.current?.querySelector('button')?.focus();
        let timer;
        const poll = async () => {
            try {
                await reload();
            }
            catch {
                if (alive.current)
                    setPollError(true);
            }
            if (alive.current)
                timer = setTimeout(() => { void poll(); }, 2000);
        };
        void poll();
        return () => { document.removeEventListener('focusin', keepFocus); alive.current = false; clearTimeout(timer); for (const url of urls.current)
            URL.revokeObjectURL(url); if (previous instanceof HTMLElement)
            previous.focus(); };
    }, [reload, embedded]);
    useEffect(() => {
        setSource(undefined);
        let current = 0, disposed = false;
        const receive = (event) => {
            const data = event.data;
            if (event.source !== frame.current?.contentWindow || !report || data?.type !== 'dsh-security-source' || data.reportId !== report.id || typeof data.file !== 'string' || !Number.isSafeInteger(data.line) || data.line < 1)
                return;
            const request = ++current;
            void remote.source(report.id, data.file, data.line).then(result => {
                if (!disposed && request === current)
                    setSource({ file: data.file, line: data.line, content: result.content });
            }).catch(() => { if (!disposed && request === current)
                setError('source-unavailable'); });
        };
        window.addEventListener('message', receive);
        return () => { disposed = true; window.removeEventListener('message', receive); };
    }, [report, remote]);
    useEffect(() => {
        if (!requestedReport)
            return;
        let disposed = false;
        void remote.report(requestedReport, 'html').then(html => { if (!disposed)
            setReport({ id: requestedReport, html }); }).catch(() => { if (!disposed)
            setError('report-directory-unavailable'); });
        return () => { disposed = true; };
    }, [requestedReport, remote]);
    const viewKey = report?.id ?? (confirm ? confirm.kind + ('task' in confirm ? confirm.task.id : confirm.id) : editor ? 'editor-' + (editor.id ?? 'new') : tab);
    useEffect(() => {
        if (!busy && panel.current && (!document.activeElement || !panel.current.contains(document.activeElement)))
            panel.current.querySelector('main input:not(:disabled),main select:not(:disabled),main button:not(:disabled),button')?.focus();
    }, [viewKey, busy, leave]);
    const action = async (operation) => {
        if (actionLock.current)
            return;
        actionLock.current = true;
        setBusy(true);
        setError('');
        setNotice('');
        try {
            await operation();
            await reload();
        }
        catch (error) {
            if (alive.current)
                setError(error instanceof Error ? error.message : 'operation-failed');
        }
        finally {
            actionLock.current = false;
            if (alive.current)
                setBusy(false);
        }
    };
    const editTask = (value) => { originalEditor.current = JSON.stringify(value.config); setEditor(value); };
    const navigate = (proceed) => {
        if (actionLock.current)
            return;
        const dirty = editor && JSON.stringify(editor.config) !== originalEditor.current;
        const settingsDirty = tab === 'settings' && settings && state && JSON.stringify(settings) !== JSON.stringify(state.settings);
        if (dirty || settingsDirty)
            setLeave({ proceed });
        else
            proceed();
    };
    const leaveEditor = () => navigate(() => setEditor(undefined));
    const showRuns = () => { setReport(undefined); setEditor(undefined); setTab('runs'); setRunFilter('all'); setRunSearch(''); };
    const openReport = (id) => action(async () => { const html = await remote.report(id, 'html'); if (alive.current)
        setReport({ id, html }); });
    const download = (format) => action(async () => {
        if (!report)
            return;
        const content = await remote.report(report.id, format);
        if (!alive.current)
            return;
        const url = URL.createObjectURL(new Blob([content], { type: format === 'html' ? 'text/html;charset=utf-8' : 'application/json' }));
        urls.current.add(url);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'security-' + report.id + '.' + format;
        link.click();
    });
    const save = (run) => {
        if (!editor || !form.current)
            return;
        for (const input of form.current.querySelectorAll('input:invalid,select:invalid')) {
            const details = input.closest('details');
            if (details)
                details.open = true;
        }
        if (!form.current.reportValidity())
            return;
        return action(async () => {
            const task = await remote.save(editor.config, editor.id, editor.revision);
            if (!alive.current)
                return;
            editTask({ id: task.id, revision: task.revision, config: task.config });
            if (run) {
                await remote.run(task.id, task.revision);
                showRuns();
                setNotice(t('scanQueued'));
            }
            setEditor(undefined);
            if (!run)
                setNotice(t('taskSaved'));
        });
    };
    const change = (key, value) => setEditor(current => current ? { ...current, config: { ...current.config, [key]: value } } : current);
    const scopeChange = (scope) => setEditor(current => current ? { ...current, config: { ...current.config, scope,
            ...(scope === 'diff' ? { baseline: 'git' } : {}), ...(scope === 'staged' ? { baseline: 'none', base: '', baselineId: '', ref: '', autoScan: false } : {}) } } : current);
    const config = editor?.config;
    const reportChoices = [...new Map([...(state?.reports ?? []).map(item => [item.id, item.source + ' · ' + date(item.createdAt)]), ...(state?.runs ?? []).flatMap(item => item.reportId ? [[item.reportId, item.config.name + ' · ' + date(item.createdAt)]] : [])]).entries()];
    const renderEditor = () => config && _jsxs("form", { ref: form, className: "card editor", onSubmit: (event) => { event.preventDefault(); void save(false); }, children: [_jsx("h2", { children: editor?.id ? t('edit') : t('newTask') }), _jsxs("fieldset", { disabled: busy, children: [_jsxs("div", { className: "grid", children: [_jsx("h3", { className: "section-title span", children: t('sourceSection') }), _jsx(Field, { label: t('name'), wide: true, children: _jsx("input", { required: true, maxLength: 100, value: config.name, onChange: event => change('name', event.target.value) }) }), _jsx(Field, { label: t('kind'), children: _jsxs("select", { value: config.kind, onChange: event => setEditor(current => current ? { ...current, config: { ...current.config, kind: event.target.value, target: '', ref: '', scope: 'full', baseline: 'none', base: '', baselineId: '', autoScan: false } } : current), children: [_jsx("option", { value: "local", children: t('local') }), _jsx("option", { value: "remote", children: t('remote') })] }) }), _jsx(Field, { label: t('scope'), children: _jsxs("select", { value: config.scope, onChange: event => scopeChange(event.target.value), children: [_jsx("option", { value: "full", children: t('full') }), _jsx("option", { value: "diff", children: t('diff') }), config.kind === 'local' ? _jsx("option", { value: "staged", children: t('staged') }) : null] }) }), _jsx(Field, { label: t('target'), hint: t(config.kind === 'local' ? 'localHint' : 'remoteHint'), wide: true, children: _jsx("input", { required: true, value: config.target, onChange: event => change('target', event.target.value), placeholder: config.kind === 'local' ? '/path/to/project' : 'https://git.example.com/team/project.git' }) }), _jsx("h3", { className: "section-title span", children: t('policySection') }), config.scope !== 'staged' ? _jsx(Field, { label: t('ref'), hint: t('refHint'), wide: true, children: _jsx("input", { value: config.ref, onChange: event => { change('ref', event.target.value); if (event.target.value)
                                        change('autoScan', false); } }) }) : _jsx("p", { className: "muted span", children: t('stagedHint') }), config.scope !== 'staged' ? _jsxs(_Fragment, { children: [_jsx(Field, { label: t('baseline'), children: _jsxs("select", { value: config.baseline, onChange: event => change('baseline', event.target.value), disabled: config.scope === 'diff', children: [_jsx("option", { value: "none", children: t('none') }), _jsx("option", { value: "git", children: t('git') }), _jsx("option", { value: "report", children: t('report') })] }) }), config.baseline === 'git' ? _jsx(Field, { label: t('base'), hint: t('baseHint'), children: _jsx("input", { required: true, value: config.base, onChange: event => change('base', event.target.value), placeholder: "origin/main" }) }) : null, config.baseline === 'report' ? _jsx(Field, { label: t('baselineId'), children: _jsxs("select", { required: true, value: config.baselineId, onChange: event => change('baselineId', event.target.value), children: [_jsx("option", { value: "", children: t('selectReport') }), reportChoices.map(([id, label]) => _jsx("option", { value: id, children: label }, id))] }) }) : null] }) : null, _jsx(Field, { label: t('view'), children: _jsxs("select", { value: config.view, onChange: event => change('view', event.target.value), children: [_jsx("option", { value: "all", children: t('all') }), _jsx("option", { value: "new", children: t('new') })] }) }), _jsxs("div", { className: "span", children: [_jsx("h3", { className: "section-title", children: t('checksSection') }), _jsx("p", { className: "muted", children: t('checksHint') })] })] }), _jsxs("div", { className: "check-cards", children: [_jsx("section", { className: 'check-card' + (config.engine === 'auto' ? ' on' : ''), children: _jsx(Field, { label: t('rulesCheck'), hint: t('rulesCheckHint'), children: _jsxs("select", { "aria-label": t('engine'), value: config.engine, onChange: event => change('engine', event.target.value), children: [_jsx("option", { value: "auto", children: t('auto') }), _jsx("option", { value: "inventory", children: t('inventory') })] }) }) }), _jsx("section", { className: 'check-card' + (config.dependencies ? ' on' : ''), children: _jsx(Check, { label: t('dependencies'), hint: t('dependenciesHint'), value: config.dependencies, onChange: value => change('dependencies', value) }) }), _jsx("section", { className: 'check-card' + (config.secrets ? ' on' : ''), children: _jsx(Check, { label: t('secrets'), hint: t('secretsHint'), value: config.secrets, onChange: value => change('secrets', value) }) }), _jsxs("section", { className: 'check-card' + (config.dynamicUrl ? ' on' : ''), children: [_jsx(Field, { label: t('dynamicUrl'), hint: t('dynamicUrlHint'), children: _jsx("input", { type: "url", maxLength: 2000, value: config.dynamicUrl, placeholder: "http://127.0.0.1:3000", onChange: event => { const value = event.target.value; setEditor(current => current ? { ...current, config: { ...current.config, dynamicUrl: value, ...(value ? {} : { dynamicAuthorized: false }) } } : current); } }) }), _jsx("p", { className: "muted", children: t('dynamicHint') }), config.dynamicUrl ? _jsx(Check, { label: t('dynamicAuthorized'), value: config.dynamicAuthorized, required: true, onChange: value => change('dynamicAuthorized', value) }) : null] }), _jsxs("section", { className: 'check-card span' + (config.agent.enabled ? ' on' : ''), children: [_jsx(Check, { label: t('agentEnable'), hint: t('agentHint'), value: config.agent.enabled, onChange: enabled => change('agent', { ...config.agent, enabled }) }), config.agent.enabled ? _jsxs("details", { className: "model-details", children: [_jsx("summary", { children: t('agentAdvanced') }), _jsx("p", { children: _jsx("strong", { children: t('agentPreset') }) }), _jsx("p", { className: "muted", children: t('agentPresetHint') }), _jsx("p", { className: "flow", children: t('flow') }), _jsx(ModelPicker, { remote: remote, value: config.agent, defaultModel: state?.agentDefault ?? null, t: t, onChange: selection => change('agent', { ...config.agent, ...selection }) }), _jsx("p", { className: "muted", children: t('agentBudget') })] }) : null] })] }), _jsx("h3", { className: "section-title", children: t('automationSection') }), _jsxs("div", { className: "grid", children: [_jsx(Field, { label: t('repairDelivery'), hint: t('deliveryPreferenceHint'), children: _jsxs("select", { value: config.repairMode, onChange: event => change('repairMode', event.target.value), children: [_jsx("option", { value: "pr", children: t('deliveryPr') }), _jsx("option", { value: "local", children: t('deliveryLocal') })] }) }), _jsxs("div", { children: [config.kind === 'local' && config.scope !== 'staged' && !config.ref ? _jsx(Check, { label: t('autoScan'), hint: t('autoHint'), value: config.autoScan, onChange: value => change('autoScan', value) }) : null, _jsx(Check, { label: t('syncSession'), hint: t('syncSessionHint'), value: config.syncSession, onChange: value => change('syncSession', value) })] })] }), _jsxs("div", { className: "form-footer", children: [_jsx("button", { className: "primary", type: "button", onClick: () => { void save(true); }, children: t('saveRun') }), _jsx("button", { type: "submit", children: t('save') }), _jsx("button", { type: "button", onClick: leaveEditor, children: t('cancel') })] })] })] });
    const renderTasks = () => _jsxs(_Fragment, { children: [_jsxs("div", { className: "toolbar", children: [_jsxs("div", { className: "grow", children: [_jsx("h2", { children: t('tasks') }), _jsx("p", { className: "muted", children: t('taskIntro') })] }), _jsx("input", { className: "search", "aria-label": t('taskSearch'), placeholder: t('taskSearch'), value: taskSearch, onChange: event => setTaskSearch(event.target.value) }), _jsxs("button", { className: "primary", disabled: busy, onClick: () => editTask({ config: newTask() }), children: ["\uFF0B ", t('newTask')] })] }), !state?.tasks.length ? _jsxs("div", { className: "empty", children: [_jsx("h3", { children: t('emptyTasks') }), _jsx("p", { className: "muted", children: t('emptyTasksHint') }), _jsxs("button", { className: "primary", onClick: () => editTask({ config: newTask() }), children: ["\uFF0B ", t('newTask')] })] }) : _jsx("div", { className: "cards", children: state.tasks.filter(task => (task.config.name + ' ' + task.config.target).toLowerCase().includes(taskSearch.toLowerCase())).map(task => {
                    const running = state.runs.find(run => run.taskId === task.id && isActive(run)), latest = state.runs.find(run => run.taskId === task.id);
                    return _jsxs("article", { className: "card", children: [_jsxs("div", { className: "card-head", children: [_jsxs("div", { className: "grow", children: [_jsx("h3", { children: task.config.name }), _jsx("p", { className: "muted", children: task.config.target })] }), latest ? _jsx("span", { className: 'tag ' + latest.status, children: t(latest.status) }) : null] }), _jsxs("div", { className: "tags", children: [task.config.agent.enabled ? _jsx("span", { className: "tag ai", children: "Agentic AI" }) : null, _jsx("span", { className: "tag", children: t(task.config.kind) }), _jsx("span", { className: "tag", children: t(task.config.scope) }), _jsx("span", { className: "tag", children: t(task.config.engine) }), _jsx("span", { className: "tag", children: task.config.baseline === 'none' ? t('noBaseline') : task.config.baseline === 'report' ? t('report') : task.config.base }), task.config.autoScan ? _jsx("span", { className: "tag", children: t('autoLabel') }) : null, task.config.dynamicUrl ? _jsx("span", { className: "tag runtime", children: t('dynamic') }) : null] }), latest ? _jsxs("div", { className: "run-summary", children: [_jsxs("span", { className: "muted", children: [t('lastRun'), " \u00B7 ", date(latest.createdAt)] }), latest.findings !== undefined ? _jsxs("span", { className: "chip", children: [latest.findings, " ", t('countSuffix')] }) : null, latest.resultSummary ? _jsxs(_Fragment, { children: [_jsxs("span", { className: "chip confirmed", children: [t('resultConfirmed'), " ", latest.resultSummary.confirmed] }), _jsxs("span", { className: "chip pending", children: [t('resultPending'), " ", latest.resultSummary.pending] }), _jsxs("span", { className: "chip", children: [t('resultDismissed'), " ", latest.resultSummary.dismissed] })] }) : null, latest.coverage === 'partial' ? _jsx("span", { className: "chip pending", children: t('coverageGap') }) : null] }) : _jsx("p", { className: "muted", children: t('neverRun') }), _jsxs("div", { className: "actions", children: [_jsx("button", { className: "primary", disabled: busy || !!running, onClick: () => { void action(async () => { await remote.run(task.id, task.revision); showRuns(); setNotice(t('scanQueued')); }); }, children: t('run') }), _jsx("button", { disabled: busy, onClick: () => editTask({ id: task.id, revision: task.revision, config: structuredClone(task.config) }), children: t('edit') }), latest?.reportId ? _jsx("button", { disabled: busy, onClick: () => { void openReport(latest.reportId); }, children: t('openReport') }) : null, running ? _jsxs("button", { onClick: showRuns, children: [t('viewProgress'), " \u00B7 ", t(phaseKey(running.phase))] }) : null, _jsxs("details", { className: "more-actions", children: [_jsx("summary", { children: t('moreActions') }), _jsxs("div", { className: "row-actions", children: [_jsx("button", { disabled: busy, onClick: () => editTask({ config: { ...structuredClone(task.config), name: task.config.name.slice(0, 90) + ' ' + t('copySuffix') } }), children: t('duplicate') }), task.config.kind === 'local' ? _jsx("button", { disabled: busy || !!running, onClick: () => { setConfirm({ kind: 'hook', task }); setHookBase(task.config.base); setHookEvent('pre-commit'); setHookAction('install'); setEnforce(false); }, children: t('hook') }) : null, _jsx("button", { className: "danger", disabled: busy || !!running, onClick: () => setConfirm({ kind: 'remove', task }), children: t('remove') })] })] })] })] }, task.id);
                }) }), state?.tasks.length && !state.tasks.some(task => (task.config.name + ' ' + task.config.target).toLowerCase().includes(taskSearch.toLowerCase())) ? _jsx("p", { className: "empty", children: t('noTaskMatch') }) : null, _jsx("p", { className: "muted", children: t('rulesHint') })] });
    const filteredRuns = state?.runs.filter(run => (run.config.name + ' ' + run.config.target).toLowerCase().includes(runSearch.toLowerCase()) && (runFilter === 'all' || (runFilter === 'active' ? isActive(run) : ['failed', 'interrupted', 'partial'].includes(run.status) || run.coverage === 'partial'))) ?? [];
    const overview = state && _jsx("div", { className: "overview", children: [['tasks', state.tasks.length, () => setTab('tasks')], ['activeRuns', state.runs.filter(isActive).length, () => { setTab('runs'); setRunFilter('active'); }], ['needsAttention', state.runs.filter(run => ['failed', 'interrupted', 'partial'].includes(run.status) || run.coverage === 'partial').length, () => { setTab('runs'); setRunFilter('attention'); }]].map(([key, count, go]) => _jsxs("button", { onClick: go, children: [_jsx("span", { children: t(key) }), _jsx("strong", { children: count }), _jsx("span", { "aria-hidden": "true", children: "\u2197" })] }, key)) });
    const renderRuns = () => _jsxs(_Fragment, { children: [_jsxs("div", { className: "toolbar", children: [_jsx("h2", { children: t('runs') }), _jsx("input", { className: "search", "aria-label": t('runSearch'), placeholder: t('runSearch'), value: runSearch, onChange: event => setRunSearch(event.target.value) }), _jsx("div", { className: "segmented", "aria-label": t('status'), children: ['all', 'active', 'attention'].map(value => _jsx("button", { "aria-pressed": runFilter === value, onClick: () => setRunFilter(value), children: t(value === 'all' ? 'allRuns' : value === 'active' ? 'activeRuns' : 'needsAttention') }, value)) })] }), state?.runs.length && !filteredRuns.length ? _jsx("div", { className: "empty", children: t('noMatches') }) : null, !state?.runs.length ? _jsx("div", { className: "empty", children: t('emptyRuns') }) : _jsx("div", { className: "card table-wrap", children: _jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: t('taskName') }), _jsx("th", { children: t('createdAt') }), _jsx("th", { children: t('status') }), _jsx("th", { children: t('actions') })] }) }), _jsx("tbody", { children: filteredRuns.map(run => _jsxs("tr", { className: isActive(run) ? 'active-run' : '', children: [_jsxs("td", { children: [_jsx("strong", { children: run.config.name }), run.previousReportId ? _jsx("span", { className: "tag", children: t('rescanLabel') }) : null, _jsxs("p", { className: "muted", children: [t(run.config.scope), " \u00B7 ", t(run.config.engine), " \u00B7 ", t(run.trigger === 'edit' ? 'editTrigger' : run.trigger === 'conversation' ? 'conversationTrigger' : run.trigger === 'repair' ? 'repairTrigger' : 'manual')] })] }), _jsx("td", { children: date(run.createdAt) }), _jsxs("td", { children: [_jsx("span", { className: 'tag ' + run.status, children: t(run.status) }), _jsxs("p", { className: "muted", children: [t(phaseKey(run.phase)), run.findings === undefined ? '' : ' · ' + run.findings + ' ' + t('countSuffix')] }), !isActive(run) && (run.coverage === 'partial' || run.status === 'partial') ? _jsx("p", { className: "coverage-notice", children: t('coveragePartial') }) : null, run.resultSummary ? _jsxs("p", { children: [t('resultConfirmed'), ": ", run.resultSummary.confirmed, " \u00B7 ", t('resultPending'), ": ", run.resultSummary.pending, " \u00B7 ", t('resultDismissed'), ": ", run.resultSummary.dismissed] }) : null, run.agent && !isActive(run) ? _jsxs("p", { children: [run.agent.nativeEnd === 'completed' || (!run.agent.nativeEnd && run.agent.status === 'completed') ? t('nativeCompleted') : t('nativeStopped'), run.agent.nativeEnd ? ' · ' + run.agent.nativeEnd : ''] }) : null, run.agent ? _jsxs("details", { className: "agent-trace", children: [_jsxs("summary", { children: [t('agentDetails'), " \u00B7 ", run.agent.steps, " ", t('agentRounds')] }), _jsxs("p", { children: [[run.agent.provider, run.agent.model].filter(Boolean).join('/'), usageLine(run.agent, t) ? ' · ' + usageLine(run.agent, t) : ''] }), _jsxs("p", { children: [t('agentFiles'), ": ", run.agent.files.length, " \u00B7 ", t('agentReviewed'), ": ", run.agent.reviewedFindings, "/", run.agent.eligibleCandidates ?? '—', " \u00B7 ", t('agentAdditional'), ": ", run.agent.additionalFindings] }), !isActive(run) ? _jsx("p", { children: run.agent.status === 'completed' ? t('agentCompleted') : t('agentIncomplete') + ' · ' + t(agentReasonKey(run.agent.reason)) }) : null, _jsx("ol", { children: run.agent.events.map((event, index) => _jsxs("li", { children: [_jsx("b", { children: event.step }), " ", t(event.kind), event.files.length ? ' · ' + event.files.join(', ') : '', event.count ? ' · ' + event.count : '', event.code ? _jsx("p", { className: "error", children: t(errorKey(event.code)) }) : null] }, index)) })] }) : null, run.diagnostics?.length ? _jsxs("details", { className: "agent-trace", children: [_jsx("summary", { children: t('coverageDetails') }), run.diagnostics.map((detail, index) => _jsx("p", { children: detail }, index))] }) : null, run.sessionWarning ? _jsx("p", { className: "error", children: t('sessionUnavailable') }) : null, run.error && run.error !== 'cancelled' ? _jsx("p", { className: "muted", children: t(errorKey(run.error)) }) : null] }), _jsx("td", { children: _jsxs("div", { className: "row-actions", children: [run.sessionId ? _jsx("button", { disabled: busy, onClick: () => { void action(async () => openSession(run.sessionId)); }, children: t('openSession') }) : null, isActive(run) ? _jsx("button", { disabled: busy || run.status === 'cancelling', onClick: () => { void action(() => remote.cancel(run.id)); }, children: t('cancel') }) : null, run.rulesReportId && run.reportId !== run.rulesReportId ? _jsx("button", { disabled: busy, onClick: () => { void openReport(run.rulesReportId); }, children: t('rulesReport') }) : null, !isActive(run) ? _jsx("button", { className: "danger", disabled: busy, onClick: () => setConfirm({ kind: 'removeRun', id: run.id, name: run.config.name, detail: date(run.createdAt) }), children: t('deleteRun') }) : null, run.reportId ? _jsx("button", { disabled: busy, onClick: () => { void openReport(run.reportId); }, children: t('openReport') }) : null] }) })] }, run.id)) })] }) })] });
    const renderReports = () => _jsxs(_Fragment, { children: [_jsxs("div", { className: "toolbar", children: [_jsx("h2", { children: t('reports') }), _jsx("input", { className: "search", "aria-label": t('source'), placeholder: t('source'), value: search, onChange: event => setSearch(event.target.value) })] }), _jsx("p", { className: "muted", children: t('reportHint') }), _jsx("div", { className: "cards", children: state?.reports.filter(item => item.source.toLowerCase().includes(search.toLowerCase())).map(item => _jsxs("article", { className: "card", children: [_jsx("h3", { children: item.source }), _jsx("p", { className: "muted", children: reportMeta(item, t) }), _jsx("span", { className: "tag", children: t(item.scope === 'diff' ? 'diff' : item.scope === 'staged' ? 'staged' : 'full') }), _jsxs("div", { className: "actions", children: [_jsx("button", { disabled: busy, onClick: () => { void openReport(item.id); }, children: t('openReport') }), _jsx("button", { className: "danger", disabled: busy, onClick: () => setConfirm({ kind: 'removeReport', id: item.id, name: item.source, detail: date(item.createdAt) + ' · ' + item.id }), children: t('deleteReport') })] })] }, item.id)) }), state?.reports.length && !state.reports.some(item => item.source.toLowerCase().includes(search.toLowerCase())) ? _jsx("div", { className: "empty", children: t('noMatches') }) : null, !state?.reports.length ? _jsx("div", { className: "empty", children: t('emptyReports') }) : null] });
    const renderEngines = () => _jsxs("section", { className: "card engine-panel", "aria-label": t('enginesTitle'), children: [_jsxs("div", { className: "card-head", children: [_jsxs("div", { className: "grow", children: [_jsx("h3", { children: t('enginesTitle') }), _jsx("p", { className: "muted", children: t('scannerHint') })] }), _jsx("span", { className: 'tag ' + (state?.toolchains?.status === 'ready' ? 'succeeded' : ''), children: t(state?.toolchains?.status === 'ready' ? 'engineReady' : state?.toolchains?.status === 'installing' ? 'engineInstalling' : state?.toolchains?.status === 'failed' ? 'engineFailed' : 'engineIdle') })] }), _jsx("div", { className: "engine-grid", children: ['semgrep', 'gitleaks'].map(engine => _jsxs("div", { className: "engine-item", children: [_jsx("span", { className: "engine-symbol", "aria-hidden": "true", children: engine === 'semgrep' ? '⌘' : '◇' }), _jsxs("div", { className: "grow", children: [_jsx("strong", { children: engine === 'semgrep' ? 'Semgrep' : 'Gitleaks' }), _jsx("p", { className: "muted", children: t(engine === 'semgrep' ? 'semgrepPurpose' : 'gitleaksPurpose') })] }), _jsx("code", { children: state?.toolchains?.[engine] ?? '—' })] }, engine)) }), state?.toolchains?.status === 'installing' ? _jsxs("p", { className: "engine-progress", role: "status", children: [_jsx("span", { className: "spinner", "aria-hidden": "true" }), t(enginePhaseKey(state.toolchains.phase))] }) : null, state?.toolchains?.status === 'failed' ? _jsx("p", { className: "error", role: "alert", children: t(engineErrorKey(state.toolchains.error)) }) : null, state?.toolchains?.status === 'failed' || state?.toolchains?.status === 'idle' ? _jsx("button", { disabled: busy, onClick: () => { void action(() => remote.setup()); }, children: t('engineRetry') }) : null] });
    const renderSettings = () => settings && _jsxs(_Fragment, { children: [renderEngines(), _jsxs("form", { className: "card editor", onSubmit: event => { event.preventDefault(); void action(async () => { const value = { ...settings, hookTools: settings.hookTools.map(value => value.trim()).filter(Boolean) }; await remote.settings(value); setSettings(value); setNotice(t('settingsSaved')); }); }, children: [_jsx("h2", { children: t('settings') }), !state?.settingsWritable ? _jsx("p", { className: "alert", children: t('readOnly') }) : null, _jsxs("fieldset", { disabled: busy || !state?.settingsWritable, children: [_jsx("div", { className: "grid", children: _jsx(Field, { label: t('reportDirectory'), wide: true, children: _jsx("input", { required: true, value: settings.reportDirectory, onChange: event => setSettings({ ...settings, reportDirectory: event.target.value }) }) }) }), _jsxs("details", { className: "advanced", children: [_jsx("summary", { children: t('engineOverrides') }), _jsx("p", { className: "muted", children: t('overrideHint') }), _jsxs("div", { className: "grid", children: [_jsx(Field, { label: t('semgrepPath'), children: _jsx("input", { value: settings.semgrepPath === 'semgrep' ? '' : settings.semgrepPath, placeholder: t('managedDefault'), onChange: event => setSettings({ ...settings, semgrepPath: event.target.value || 'semgrep' }) }) }), _jsx(Field, { label: t('gitleaksPath'), children: _jsx("input", { value: settings.gitleaksPath === 'gitleaks' ? '' : settings.gitleaksPath, placeholder: t('managedDefault'), onChange: event => setSettings({ ...settings, gitleaksPath: event.target.value || 'gitleaks' }) }) }), _jsx(Field, { label: t('hookTools'), hint: t('hookToolsHint'), wide: true, children: _jsx("textarea", { value: settings.hookTools.join('\n'), onChange: event => setSettings({ ...settings, hookTools: event.target.value.split('\n') }) }) })] }), _jsx(Check, { label: t('legacyAuto'), hint: t('legacyHint'), value: settings.autoScan, onChange: value => setSettings({ ...settings, autoScan: value }) })] }), _jsx("div", { className: "form-footer", children: _jsx("button", { className: "primary", type: "submit", children: t('saveSettings') }) })] })] })] });
    const renderConfirm = () => confirm && !('task' in confirm) ? _jsxs("section", { className: "card confirm-box", role: "alertdialog", "aria-label": t(confirm.kind === 'removeRun' ? 'deleteRun' : 'deleteReport'), children: [_jsx("h2", { children: t(confirm.kind === 'removeRun' ? 'deleteRun' : 'deleteReport') }), _jsx("strong", { children: confirm.name }), _jsx("p", { children: confirm.detail }), _jsx("p", { className: "muted", children: t(confirm.kind === 'removeRun' ? 'deleteRunHint' : 'deleteReportHint') }), _jsxs("div", { className: "form-footer", children: [_jsx("button", { className: "danger", disabled: busy, onClick: () => {
                            void action(async () => {
                                if (confirm.kind === 'removeRun')
                                    await remote.removeRun(confirm.id);
                                else
                                    await remote.removeReport(confirm.id);
                                setConfirm(undefined);
                                setNotice(t('deleted'));
                            });
                        }, children: t('confirmDelete') }), _jsx("button", { disabled: busy, onClick: () => setConfirm(undefined), children: t('cancel') })] })] }) : confirm && 'task' in confirm && _jsxs("section", { className: "card confirm-box", role: "alertdialog", "aria-label": t(confirm.kind === 'hook' ? 'hookTitle' : 'removeTitle'), children: [_jsx("h2", { children: t(confirm.kind === 'hook' ? 'hookTitle' : 'removeTitle') }), _jsx("strong", { children: confirm.task.config.name }), _jsx("p", { children: confirm.task.config.target }), _jsx("p", { className: "muted", children: t(confirm.kind === 'hook' ? 'hookHint' : 'removeHint') }), confirm.kind === 'hook' ? _jsxs("fieldset", { disabled: busy, children: [_jsxs("div", { className: "grid", children: [_jsx(Field, { label: t('hookEvent'), children: _jsxs("select", { value: hookEvent, onChange: event => setHookEvent(event.target.value), children: [_jsx("option", { value: "pre-commit", children: t('preCommit') }), _jsx("option", { value: "pre-push", children: t('prePush') })] }) }), _jsx(Field, { label: t('actions'), children: _jsxs("select", { value: hookAction, onChange: event => setHookAction(event.target.value), children: [_jsx("option", { value: "install", children: t('hookInstall') }), _jsx("option", { value: "remove", children: t('hookRemove') })] }) }), hookEvent === 'pre-push' && hookAction === 'install' ? _jsx(Field, { label: t('base'), wide: true, children: _jsx("input", { value: hookBase, onChange: event => setHookBase(event.target.value), placeholder: "origin/main" }) }) : null] }), _jsx(Check, { label: t('enforce'), hint: t('enforceHint'), value: enforce, onChange: setEnforce })] }) : null, _jsxs("div", { className: "form-footer", children: [_jsx("button", { disabled: busy || (confirm.kind === 'hook' && hookEvent === 'pre-push' && hookAction === 'install' && !hookBase.trim()), className: "primary", onClick: () => { void action(async () => { if (confirm.kind === 'remove')
                            await remote.remove(confirm.task.id, confirm.task.revision);
                        else
                            await remote.hook({ taskId: confirm.task.id, revision: confirm.task.revision, event: hookEvent, action: hookAction, enforce, base: hookBase, confirm: true }); setConfirm(undefined); setNotice(t(confirm.kind === 'hook' ? 'hookDone' : 'taskSaved')); }); }, children: t(confirm.kind === 'hook' ? 'hookConfirm' : 'confirm') }), _jsx("button", { disabled: busy, onClick: () => setConfirm(undefined), children: t('cancel') })] })] });
    return _jsxs("div", { className: 'security-workbench' + (embedded ? ' embedded' : ''), role: embedded ? 'region' : 'dialog', "aria-modal": embedded ? undefined : true, "aria-label": t('title'), ref: panel, onKeyDown: event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                if (busy)
                    return;
                if (leave) {
                    setLeave(undefined);
                    return;
                }
                if (source)
                    setSource(undefined);
                else if (report)
                    setReport(undefined);
                else if (confirm)
                    setConfirm(undefined);
                else if (editor)
                    leaveEditor();
                else
                    navigate(close);
            }
            if (!embedded && event.key === 'Tab') {
                const focusable = [...(panel.current?.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,iframe') ?? [])].filter(item => item.getClientRects().length > 0);
                const first = focusable[0], last = focusable.at(-1);
                if (event.shiftKey && document.activeElement === first) {
                    last?.focus();
                    event.preventDefault();
                }
                else if (!event.shiftKey && document.activeElement === last) {
                    first?.focus();
                    event.preventDefault();
                }
            }
        }, children: [_jsx("style", { children: css }), _jsxs("header", { children: [_jsxs("button", { disabled: busy, onClick: () => navigate(close), children: ["\u2190 ", t('back')] }), _jsxs("div", { className: "grow", children: [_jsx("h1", { children: t('title') }), _jsx("p", { className: "muted", children: t('subtitle') })] }), busy ? _jsxs("span", { className: "engine-progress", role: "status", children: [_jsx("span", { className: "spinner", "aria-hidden": "true" }), t('working')] }) : null, _jsx("button", { disabled: busy, onClick: () => { void action(reload); }, children: t('refresh') })] }), _jsxs("div", { className: "body", children: [_jsx("nav", { "aria-label": t('title'), children: ['tasks', 'runs', 'reports', 'settings'].map(value => _jsxs("button", { className: tab === value ? 'selected' : '', "aria-current": tab === value ? 'page' : undefined, disabled: busy, onClick: () => navigate(() => { setTab(value); setEditor(undefined); setConfirm(undefined); setReport(undefined); }), children: [t(value), state && value !== 'settings' ? _jsx("span", { className: "nav-count", children: state[value].length }) : null] }, value)) }), _jsx("main", { children: _jsxs("div", { className: report ? 'content report-content' : 'content', children: [state?.toolchains && state.toolchains.status !== 'ready' && tab !== 'settings' && !report ? _jsxs("div", { className: "environment-banner", role: "status", children: [_jsxs("span", { children: [t(state.toolchains.status === 'failed' ? 'engineFailed' : 'engineInstalling'), " \u00B7 ", t(state.toolchains.status === 'failed' ? engineErrorKey(state.toolchains.error) : enginePhaseKey(state.toolchains.phase))] }), _jsx("button", { onClick: () => navigate(() => { setTab('settings'); setEditor(undefined); setConfirm(undefined); }), children: t('viewEnvironment') })] }) : null, pollError ? _jsxs("div", { className: "alert", role: "status", children: [t('connectionLost'), " ", _jsx("button", { disabled: busy, onClick: () => { void action(reload); }, children: t('refresh') })] }) : null, state?.warnings.map(warning => _jsx("div", { className: "alert", children: t(errorKey(warning)) }, warning)), error ? _jsx("div", { className: "alert error", role: "alert", children: t(errorKey(error)) }) : null, notice ? _jsx("div", { className: "alert notice", role: "status", children: notice }) : null, !state ? (error ? null : _jsx("p", { role: "status", children: t('loading') })) : report ? _jsxs(_Fragment, { children: [_jsxs("div", { className: "toolbar", children: [_jsxs("button", { disabled: busy, onClick: () => setReport(undefined), children: ["\u2190 ", t('closeReport')] }), _jsxs("div", { className: "row-actions", children: [_jsx("button", { disabled: busy, onClick: () => { void download('html'); }, children: t('downloadHtml') }), _jsx("button", { disabled: busy, onClick: () => { void download('json'); }, children: t('downloadJson') })] })] }), _jsx("p", { className: "muted", children: t('reportHint') }), _jsx(ReportFollowUp, { id: report.id, remote: remote, t: t, busy: busy, runs: state.runs, action: action, openSession: openSession, showRuns: showRuns, openReport: id => { void openReport(id); } }, report.id), source ? _jsxs("section", { className: "source-preview", role: "region", "aria-label": t('sourcePreview'), children: [_jsxs("div", { className: "toolbar", children: [_jsxs("strong", { children: [source.file, ":", source.line] }), _jsx("button", { onClick: () => setSource(undefined), children: t('closeSource') })] }), _jsx("pre", { children: source.content.split('\n').map((line, index) => _jsxs("span", { className: line.startsWith(source.line + ':') ? 'source-highlight' : '', children: [line, '\n'] }, index)) })] }) : null, _jsx("iframe", { ref: frame, title: t('openReport'), srcDoc: report.html, sandbox: "allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox" })] }) : confirm ? renderConfirm() : editor ? renderEditor() : tab === 'tasks' ? _jsxs(_Fragment, { children: [overview, renderTasks()] }) : tab === 'runs' ? renderRuns() : tab === 'reports' ? renderReports() : renderSettings()] }) })] }), leave ? _jsx("div", { className: "discard-overlay", children: _jsxs("section", { className: "card confirm-box", role: "alertdialog", "aria-modal": "true", "aria-label": t('unsavedTitle'), onKeyDown: event => { if (event.key === 'Tab') {
                        const buttons = event.currentTarget.querySelectorAll('button');
                        if (event.shiftKey && document.activeElement === buttons[0]) {
                            buttons[1]?.focus();
                            event.preventDefault();
                        }
                        else if (!event.shiftKey && document.activeElement === buttons[1]) {
                            buttons[0]?.focus();
                            event.preventDefault();
                        }
                        event.stopPropagation();
                    } }, children: [_jsx("h2", { children: t('unsavedTitle') }), _jsx("p", { children: t('unsavedHint') }), _jsxs("div", { className: "actions", children: [_jsx("button", { autoFocus: true, onClick: () => setLeave(undefined), children: t('keepEditing') }), _jsx("button", { className: "danger", onClick: () => { const proceed = leave.proceed; setLeave(undefined); setSettings(state?.settings); proceed(); }, children: t('discard') })] })] }) }) : null] });
}
