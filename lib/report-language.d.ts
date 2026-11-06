import type { Finding } from './report.js';
export declare const hasChinese: (value: string) => boolean;
export declare function chineseFinding(item: Finding): {
    title: string;
    evidence: string;
    recommendation: string;
    verification: string;
};
