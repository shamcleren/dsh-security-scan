import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { errorKey } from './locales.js';
/** Runtime findings point at an HTTP endpoint instead of a source line. */
const place = (item) => item.endpoint ?? item.file + ':' + item.line;
const steps = ['stepSelect', 'stepRepair', 'stepRescan', 'stepCompare'];
const stepHints = ['selectionHint', 'repairHint', 'rescanHint', 'compareHint'];
export function ReportFollowUp({ id, remote, t, busy, runs, action, openSession, showRuns, openReport, notify }) {
    const [data, setData] = useState(), [error, setError] = useState('');
    const [mode, setMode] = useState('pr');
    const [selected, setSelected] = useState([]), [query, setQuery] = useState(''), [pickerOpen, setPickerOpen] = useState(false);
    const [category, setCategory] = useState(''), [severity, setSeverity] = useState(''), [status, setStatus] = useState('');
    const [suppressing, setSuppressing] = useState(false), [reason, setReason] = useState('');
    useEffect(() => {
        let disposed = false;
        setData(undefined);
        setSelected([]);
        setPickerOpen(false);
        setError('');
        setQuery('');
        setCategory('');
        setSeverity('');
        setStatus('');
        setSuppressing(false);
        setReason('');
        void remote.reportActions(id).then(value => { if (!disposed) {
            setData(value);
            setMode(value.repairMode);
        } }).catch(error => { if (!disposed)
            setError(error instanceof Error ? error.message : 'operation-failed'); });
        return () => { disposed = true; };
    }, [id, remote]);
    // A running repair session can exclude findings or record its PR; follow those changes without a manual refresh.
    const following = !!data?.run?.repair?.admitted;
    useEffect(() => {
        if (!following)
            return;
        let disposed = false;
        const timer = setInterval(() => {
            void remote.reportActions(id).then(value => {
                if (disposed)
                    return;
                setData(value);
                setSelected(current => current.filter(key => value.findings.some(item => item.id === key && item.status !== 'dismissed' && !item.suppressed)));
            }).catch(() => { });
        }, 5000);
        return () => { disposed = true; clearInterval(timer); };
    }, [following, id, remote]);
    if (error)
        return _jsx("div", { className: "alert", role: "alert", children: t(errorKey(error)) });
    if (!data)
        return _jsx("p", { role: "status", children: t('loading') });
    const rescan = runs.find(run => run.previousReportId === id);
    const repair = data.run?.repair;
    // Exclusions saved after this report was written also leave the actionable list immediately.
    const findings = data.findings.filter(item => item.status !== 'dismissed' && !item.suppressed);
    const suppressedCount = data.findings.filter(item => item.suppressed).length;
    const selectedItems = findings.filter(item => selected.includes(item.id));
    // A started repair fixes its own selection; the checkboxes then choose only what to exclude.
    const canSuppress = selectedItems.length > 0 && selectedItems.every(item => item.suppressible);
    const inRepair = new Set(repair?.findingIds ?? []);
    const pickable = data.repairable || findings.some(item => item.suppressible);
    const visible = findings.filter(item => (item.title + ' ' + place(item)).toLowerCase().includes(query.trim().toLowerCase())
        && (!category || item.category === category) && (!severity || item.severity === severity) && (!status || item.status === status));
    const selectedVisible = visible.filter(item => selected.includes(item.id)).length;
    const available = visible.filter(item => !selected.includes(item.id));
    const capacity = Math.max(0, 20 - selected.length);
    const addCount = Math.min(capacity, available.length);
    const confirmed = findings.filter(item => item.status === 'confirmed'), severe = findings.filter(item => item.severity === 'critical' || item.severity === 'high');
    const addAll = (items) => { setPickerOpen(true); setSelected(current => [...new Set([...current, ...items.map(item => item.id)])].slice(0, 20)); };
    // Findings dismissed by review or excluded by the user are not offered for another round.
    const leftover = data.comparison?.items.filter(item => item.change !== 'notObserved' && item.status !== 'dismissed' && !item.suppressed).length ?? 0;
    const canContinue = !!data.repairChain && leftover > 0;
    // Where the user is in select → repair → rescan → compare; a rescan report is already at the comparison.
    const stage = data.comparison ? 3 : rescan ? (rescan.reportId ? 3 : 2) : repair?.admitted ? 2 : repair || selected.length ? 1 : 0;
    const quickSelect = (label, items) => _jsxs("button", { disabled: busy || !capacity || items.every(item => selected.includes(item.id)), onClick: () => addAll(items), children: [t(label), " (", items.length, ")"] });
    return _jsxs("section", { className: "card follow-up", "aria-label": t('nextSteps'), children: [_jsxs("div", { className: "card-head", children: [_jsxs("div", { className: "grow", children: [_jsx("h2", { children: t('nextSteps') }), _jsx("p", { className: "muted", children: t('followUpHint') })] }), _jsxs("span", { className: "tag", children: [findings.length, " ", t('actionable')] }), suppressedCount ? _jsxs("span", { className: "tag", children: [suppressedCount, " ", t('suppressedCount')] }) : null] }), data.repairable || data.comparison ? _jsxs(_Fragment, { children: [_jsx("ol", { className: "stepper", children: steps.map((key, index) => _jsxs("li", { className: index < stage ? 'done' : index === stage ? 'current' : '', "aria-current": index === stage ? 'step' : undefined, children: [_jsx("span", { className: "step-dot", "aria-hidden": "true", children: index < stage ? '✓' : index + 1 }), t(key)] }, key)) }), _jsx("p", { className: "muted step-hint", children: t(stepHints[stage]) })] }) : null, data.repairable && findings.length && !repair && (confirmed.length || severe.length) ? _jsxs("div", { className: "quick-select", children: [confirmed.length ? quickSelect('quickConfirmed', confirmed) : null, severe.length ? quickSelect('quickHigh', severe) : null, selected.length ? _jsxs("span", { className: "muted", children: [t('selectedFindings'), " ", selected.length, "/20"] }) : null] }) : null, repair ? _jsxs("p", { className: "muted", children: [t('repairStarted'), " \u00B7 ", repair.findingIds.length, " \u00B7 ", t('repairExcludeHint')] }) : null, pickable && findings.length ? _jsxs("details", { className: "finding-picker", open: pickerOpen || undefined, onToggle: event => setPickerOpen(event.currentTarget.open), children: [_jsxs("summary", { children: [t(repair ? 'selectToExclude' : 'selectFindings'), " \u00B7 ", selected.length, "/20"] }), _jsxs(_Fragment, { children: [_jsx("input", { className: "search", disabled: busy, "aria-label": t('findingSearch'), placeholder: t('findingSearch'), value: query, onChange: event => setQuery(event.target.value) }), _jsxs("div", { className: "finding-filters", children: [_jsxs("label", { children: [t('findingType'), _jsxs("select", { "aria-label": t('findingType'), disabled: busy, value: category, onChange: event => setCategory(event.target.value), children: [_jsx("option", { value: "", children: t('allTypes') }), ['sourceRisk', 'dependencyRisk', 'secretRisk', 'dynamicRisk'].filter(key => key !== 'dynamicRisk' || findings.some(item => item.category === key)).map(key => _jsxs("option", { value: key, children: [t(key), " (", findings.filter(item => item.category === key).length, ")"] }, key))] })] }), _jsxs("label", { children: [t('riskLevel'), _jsxs("select", { "aria-label": t('riskLevel'), disabled: busy, value: severity, onChange: event => setSeverity(event.target.value), children: [_jsx("option", { value: "", children: t('allLevels') }), ['critical', 'high', 'medium', 'low', 'info'].map(key => _jsx("option", { value: key, children: t(key) }, key))] })] }), _jsxs("label", { children: [t('reviewState'), _jsxs("select", { "aria-label": t('reviewState'), disabled: busy, value: status, onChange: event => setStatus(event.target.value), children: [_jsx("option", { value: "", children: t('allReviewStates') }), _jsx("option", { value: "confirmed", children: t('resultConfirmed') }), _jsx("option", { value: "needs-review", children: t('resultPending') })] })] })] }), _jsxs("div", { className: "actions finding-selection", children: [_jsx("button", { disabled: busy || !addCount, onClick: () => setSelected(current => [...new Set([...current, ...available.map(item => item.id)])].slice(0, 20)), children: available.length > capacity ? t('selectFirst') + ' ' + addCount : t('selectVisible') }), _jsx("button", { disabled: busy || !selectedVisible, onClick: () => setSelected(current => current.filter(key => !visible.some(item => item.id === key))), children: t('deselectVisible') }), _jsx("button", { disabled: busy || !selected.length, onClick: () => setSelected([]), children: t('clearSelection') }), _jsx("button", { disabled: busy || !(query || category || severity || status), onClick: () => { setQuery(''); setCategory(''); setSeverity(''); setStatus(''); }, children: t('resetFilters') }), _jsxs("button", { disabled: busy || !canSuppress || suppressing, onClick: () => setSuppressing(true), children: [t('suppressSelected'), selectedItems.length ? ' (' + selectedItems.length + ')' : ''] })] }), selectedItems.some(item => !item.suppressible) ? _jsx("p", { className: "muted", children: t('suppressAiOnly') }) : null, suppressing ? _jsxs("form", { className: "suppress-form", "aria-label": t('suppressTitle'), onSubmit: event => {
                                    event.preventDefault();
                                    void action(async () => {
                                        const result = await remote.suppress(id, selectedItems.map(item => item.id), reason.trim());
                                        setSuppressing(false);
                                        setReason('');
                                        setSelected([]);
                                        notify?.(t('suppressDone').replace('{n}', String(result.added + result.existing)));
                                        setData(await remote.reportActions(id));
                                    });
                                }, children: [_jsx("strong", { children: t('suppressTitle') }), _jsx("p", { className: "muted", children: t('suppressHint') }), _jsxs("label", { children: [t('suppressReason'), _jsx("textarea", { required: true, maxLength: 500, disabled: busy, value: reason, placeholder: t('suppressReasonHint'), onChange: event => setReason(event.target.value) })] }), _jsxs("div", { className: "actions", children: [_jsxs("button", { className: "primary", type: "submit", disabled: busy || !reason.trim() || !canSuppress, children: [t('suppressConfirm'), " (", selectedItems.length, ")"] }), _jsx("button", { type: "button", disabled: busy, onClick: () => { setSuppressing(false); setReason(''); }, children: t('cancel') })] })] }) : null, _jsxs("p", { className: "muted", role: "status", children: [t('matchingFindings'), " ", visible.length, " \u00B7 ", t('selectedFindings'), " ", selected.length, "/20 \u00B7 ", t('hiddenSelected'), " ", selected.length - selectedVisible, selected.length === 20 ? ' · ' + t('selectionLimit') : ''] })] }), _jsxs("div", { className: "finding-list", children: [visible.map(item => _jsxs("label", { className: "finding-row", children: [_jsx("input", { type: "checkbox", checked: selected.includes(item.id), disabled: busy || (!selected.includes(item.id) && selected.length >= 20), onChange: event => setSelected(current => event.target.checked ? [...current, item.id] : current.filter(key => key !== item.id)) }), _jsxs("span", { className: "grow", children: [_jsx("strong", { children: item.title }), _jsxs("small", { children: [t(item.category), " \u00B7 ", place(item), " \u00B7 ", t(item.status === 'confirmed' ? 'resultConfirmed' : 'resultPending')] })] }), inRepair.has(item.id) ? _jsx("span", { className: "tag ai", children: t('inRepair') }) : null, _jsx("span", { className: "tag", children: t(item.severity) })] }, item.id)), !visible.length ? _jsx("p", { className: "empty", children: t('noMatches') }) : null] })] }) : null, !data.repairable || !findings.length ? _jsx("p", { className: "muted", children: findings.length ? t('repairUnavailable') : t('noActionable') }) : null, data.repairable && findings.length ? _jsxs("div", { className: "repair-delivery", children: [_jsxs("label", { children: [t('repairDelivery'), _jsxs("select", { "aria-label": t('repairDelivery'), value: repair?.mode ?? mode, disabled: busy || !!repair, onChange: event => setMode(event.target.value), children: [_jsx("option", { value: "pr", children: t('deliveryPr') }), _jsx("option", { value: "local", children: t('deliveryLocal') })] })] }), _jsx("p", { className: "muted", children: t((repair?.mode ?? mode) === 'pr' ? 'deliveryPrHint' : 'deliveryLocalHint') }), (repair?.mode ?? mode) === 'pr' ? _jsxs(_Fragment, { children: [repair?.workspace ? _jsxs("p", { className: "muted", children: [repair.workspace.repositoryUrl || t('noRepairRemote'), _jsx("br", {}), t('prBase'), ": ", repair.workspace.base, " \u00B7 ", repair.workspace.commit.slice(0, 12), _jsx("br", {}), t('prBranch'), ": ", repair.workspace.branch] }) : data.prPreview ? _jsxs("p", { className: "muted", children: [data.prPreview.repositoryUrl || t('noRepairRemote'), _jsx("br", {}), t('prBase'), ": ", data.prPreview.base, " \u00B7 ", data.prPreview.commit.slice(0, 12)] }) : _jsx("p", { role: "alert", children: t(errorKey(data.prError ?? 'repair-pr-repository')) }), repair?.workspace?.prUrl ? _jsx("a", { href: repair.workspace.prUrl, target: "_blank", rel: "noopener noreferrer", children: t('viewRepairPr') }) : repair ? _jsx("p", { className: "muted", children: t('prPending') }) : null, _jsx("button", { disabled: busy, onClick: () => { void action(async () => setData(await remote.reportActions(id))); }, children: t('refreshDelivery') })] }) : null] }) : null, data.run?.repairSource ? _jsxs("p", { className: "muted", children: [t('rescanRepairBranch'), ": ", data.run.repairSource.branch, data.run.repairSource.prUrl ? _jsxs(_Fragment, { children: [" \u00B7 ", _jsx("a", { href: data.run.repairSource.prUrl, target: "_blank", rel: "noopener noreferrer", children: t('viewRepairPr') })] }) : null] }) : null, _jsxs("div", { className: "actions", children: [canContinue ? _jsxs("button", { className: "primary", disabled: busy, onClick: () => { void action(async () => { const result = await remote.continueRepair(id); openSession(result.sessionId); }); }, children: [t('continueRepair'), " \u00B7 ", t('repairRound').replace('{n}', String(data.repairChain.round))] }) : null, data.repairable && findings.length ? _jsx("button", { className: canContinue ? '' : 'primary', disabled: busy || (!repair && (!selected.length || (mode === 'pr' && !data.prPreview))), onClick: () => {
                            void action(async () => {
                                const result = await remote.repair(id, repair?.findingIds ?? selected, repair?.mode ?? mode, data.prPreview?.revision);
                                setData(await remote.reportActions(id));
                                openSession(result.sessionId);
                            });
                        }, children: repair ? t(repair.admitted ? 'openRepair' : 'retryRepair') : t(mode === 'pr' ? 'repairPrSelected' : 'repairSelected') + (selected.length ? ' (' + selected.length + ')' : '') }) : null, data.run ? _jsx("button", { disabled: busy || runs.some(run => run.taskId === data.run.taskId && ['queued', 'running', 'cancelling'].includes(run.status)), onClick: () => { void action(async () => { await remote.rescan(id); showRuns(); }); }, children: t(repair?.mode === 'pr' || data.run?.repairSource ? 'rescanRepairBranch' : 'rescan') }) : _jsx("p", { className: "muted", children: t('rescanUnavailable') }), rescan ? _jsx("button", { disabled: busy, onClick: () => rescan.reportId ? openReport(rescan.reportId) : showRuns(), children: rescan.reportId ? t('viewComparison') : t('viewProgress') }) : null] }), data.comparison ? _jsxs("details", { className: "comparison", open: true, children: [_jsx("summary", { children: t('comparisonTitle') }), _jsx("p", { className: "muted", children: t(data.comparison.comparable ? 'comparisonHint' : 'comparisonIncomplete') }), _jsx("button", { disabled: busy, onClick: () => openReport(data.comparison.previousId), children: t('previousReport') }), _jsx("div", { className: "comparison-counts", children: ['notObserved', 'remaining', 'added', 'unverified'].map(change => _jsxs("span", { className: "tag", children: [t(change), " \u00B7 ", data.comparison.items.filter(item => item.change === change).length] }, change)) }), _jsx("div", { className: "finding-list", children: data.comparison.items.map((item, index) => _jsxs("div", { className: "finding-row", children: [_jsx("span", { className: "tag", children: t(item.change) }), _jsxs("span", { children: [_jsx("strong", { children: item.title }), _jsxs("small", { children: [t(item.category), " \u00B7 ", place(item), " \u00B7 ", t(item.status === 'confirmed' ? 'resultConfirmed' : item.status === 'dismissed' ? 'resultDismissed' : 'resultPending')] })] })] }, index)) })] }) : null] });
}
