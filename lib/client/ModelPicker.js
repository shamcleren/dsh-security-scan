import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const key = (value) => JSON.stringify([value.provider, value.model]);
export function modelChoices(models, selected) {
    const choices = [...new Map(models.map(model => [key(model), model])).values()];
    return selected.provider && !choices.some(model => key(model) === key(selected))
        ? [...choices, { ...selected, name: selected.model, providerName: selected.provider, saved: true }]
        : choices;
}
export function ModelPicker({ remote, value, defaultModel, onChange, t }) {
    const [catalog, setCatalog] = useState({ models: [], partial: false });
    const [revision, refresh] = useState(0), [loading, setLoading] = useState(true);
    useEffect(() => {
        let disposed = false;
        setLoading(true);
        void remote.models().then(result => { if (!disposed)
            setCatalog(result); })
            .catch(() => { if (!disposed)
            setCatalog(current => ({ ...current, partial: true })); })
            .finally(() => { if (!disposed)
            setLoading(false); });
        return () => { disposed = true; };
    }, [remote, revision]);
    const choices = modelChoices(catalog.models, value);
    const defaultName = defaultModel ? catalog.models.find(model => key(model) === key(defaultModel)) : undefined;
    const defaultLabel = defaultModel ? (defaultName ? defaultName.name + ' · ' + defaultName.providerName : defaultModel.model) : t('agentModelMissing');
    return _jsxs("div", { className: "model-picker", children: [_jsxs("label", { className: "field", children: [_jsx("span", { children: t('agentAdvanced') }), _jsxs("select", { value: value.provider ? key(value) : '', onChange: event => {
                            const choice = choices.find(model => key(model) === event.target.value);
                            if (choice)
                                onChange({ provider: choice.provider, model: choice.model });
                            else if (!event.target.value)
                                onChange({ provider: '', model: '' });
                        }, children: [_jsxs("option", { value: "", children: [t('agentDefault'), " \u00B7 ", defaultLabel] }), choices.map(model => _jsxs("option", { value: key(model), children: [model.name, model.name !== model.model ? ' (' + model.model + ')' : '', " \u00B7 ", model.providerName, model.saved ? ' · ' + t('agentSavedModel') : ''] }, key(model)))] })] }), _jsx("button", { type: "button", disabled: loading, onClick: () => refresh(value => value + 1), children: t(loading ? 'agentModelsLoading' : 'agentModelsRefresh') }), _jsx("p", { className: "muted", role: "status", children: t(loading ? 'agentModelsLoading' : catalog.partial ? 'agentModelsFailed' : catalog.models.length ? 'agentModelsHint' : 'agentModelsEmpty') }), choices.some(model => model.saved) && !loading ? _jsx("p", { className: "muted", children: t('agentSavedModelHint') }) : null] });
}
