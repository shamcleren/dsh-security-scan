import type { ContextFormed } from '@deepseek-ai/dsh-llm';
declare module '@deepseek-ai/dsh-llm' {
    interface MessageSourceMap {
        'plugin:security-scan': {
            kind: 'plugin:security-scan';
        } & ContextFormed;
        'security-scan': {
            kind: 'security-scan';
        } & ContextFormed;
    }
}
