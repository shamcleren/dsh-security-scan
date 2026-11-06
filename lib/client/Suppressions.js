import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { errorKey } from './locales.js';
/** Settings section for user exclusions; it loads independently so a broken list never hides other settings. */
export function Suppressions({ remote, t, busy, action, notify }) {
    const [items, setItems] = useState(), [error, setError] = useState(''), [query, setQuery] = useState('');
    const load = async () => { try {
        setItems(await remote.suppressions());
        setError('');
    }
    catch (cause) {
        setError(cause instanceof Error ? cause.message : 'operation-failed');
    } };
    useEffect(() => { void load(); }, [remote]);
    const needle = query.trim().toLowerCase();
    const visible = (items ?? []).filter(item => [item.sourceLabel, item.file, item.reason, item.title, item.rule].join(' ').toLowerCase().includes(needle));
    return _jsxs("section", { className: "card suppressions", "aria-label": t('suppressionsTitle'), children: [_jsxs("div", { className: "card-head", children: [_jsxs("div", { className: "grow", children: [_jsx("h3", { children: t('suppressionsTitle') }), _jsx("p", { className: "muted", children: t('suppressionsHint') })] }), items ? _jsx("span", { className: "tag", children: items.length }) : null] }), error ? _jsx("p", { className: "alert", role: "alert", children: t(errorKey(error)) }) : !items ? _jsx("p", { role: "status", children: t('loading') }) : !items.length ? _jsx("p", { className: "muted", children: t('suppressionsEmpty') }) : _jsxs(_Fragment, { children: [items.length > 5 ? _jsx("input", { className: "search", "aria-label": t('suppressionSearch'), placeholder: t('suppressionSearch'), value: query, onChange: event => setQuery(event.target.value) }) : null, _jsxs("div", { className: "finding-list", children: [visible.map(item => _jsxs("div", { className: "finding-row", children: [_jsxs("span", { className: "grow", children: [_jsx("strong", { children: item.title }), _jsxs("small", { children: [item.sourceLabel, " \u00B7 ", item.file, " \u00B7 ", item.rule] }), _jsxs("small", { children: [new Date(item.createdAt).toLocaleDateString(), " \u00B7 ", item.reason] })] }), _jsx("button", { disabled: busy, "aria-label": t('suppressionRestore') + ' ' + item.title, onClick: () => {
                                            void action(async () => {
                                                try {
                                                    await remote.unsuppress(item.id);
                                                    notify(t('suppressionRestored'));
                                                }
                                                finally {
                                                    await load();
                                                }
                                            });
                                        }, children: t('suppressionRestore') })] }, item.id)), !visible.length ? _jsx("p", { className: "empty", children: t('noMatches') }) : null] })] })] });
}
