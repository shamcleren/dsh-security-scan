import type LlmRuntime from '@deepseek-ai/dsh-llm';
import { type ModelCatalog } from './ui-contract.js';
/** Only public display metadata crosses the UI boundary; never provider settings or credentials. */
export declare function listAuditModels(llm: Pick<LlmRuntime, 'listProviders' | 'listModels'>): Promise<ModelCatalog>;
