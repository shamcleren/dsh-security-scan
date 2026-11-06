interface PresetRoot {
    path: string;
    trust: 'user' | 'builtin';
}
export declare const SECURITY_PRESET = "dsh-security-audit";
export declare function ensureSecurityPreset(roots: readonly PresetRoot[]): Promise<void>;
export {};
