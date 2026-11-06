import { ModelCatalogSchema } from './ui-contract.js';
/** Only public display metadata crosses the UI boundary; never provider settings or credentials. */
export async function listAuditModels(llm) {
    const providers = llm.listProviders();
    const results = await Promise.allSettled(providers.map(async (provider) => {
        const models = await llm.listModels(provider.id);
        return models.map(model => ({ provider: provider.id, providerName: provider.name, model: model.id, name: model.name }));
    }));
    return ModelCatalogSchema.parse({ models: results.flatMap(result => result.status === 'fulfilled' ? result.value : []), partial: results.some(result => result.status === 'rejected') });
}
