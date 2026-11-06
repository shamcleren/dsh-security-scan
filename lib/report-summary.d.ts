import type { Finding, Report } from './report.js';
export declare const riskNames: Record<string, string>;
export declare function needsSecretRecheck(item: Finding): boolean;
export declare function reportSummary(report: Report): {
    sourceConfirmed: {
        id: string;
        fingerprint: string;
        engine: string;
        rule: string;
        file: string;
        line: number;
        title: string;
        cwe: string;
        severity: "high" | "medium" | "critical" | "low" | "info";
        status: "confirmed" | "needs-review" | "dismissed";
        change: "unknown" | "new" | "existing" | "not-observed";
        evidence: string;
        recommendation: string;
        verification: string;
        citations?: {
            file: string;
            start: number;
            end: number;
        }[] | undefined;
        endpoint?: {
            url: string;
            method: "GET";
            status: number;
        } | undefined;
        dependency?: {
            name: string;
            version: string;
            ecosystem: string;
            advisoryId: string;
            aliases: string[];
            fixedVersions: string[];
            summary: string;
            references: string[];
            metadataAvailable: boolean;
            locationExact: boolean;
        } | undefined;
        suppression?: {
            id: string;
            reason: string;
            createdAt: string;
        } | undefined;
    }[];
    sourcePending: {
        id: string;
        fingerprint: string;
        engine: string;
        rule: string;
        file: string;
        line: number;
        title: string;
        cwe: string;
        severity: "high" | "medium" | "critical" | "low" | "info";
        status: "confirmed" | "needs-review" | "dismissed";
        change: "unknown" | "new" | "existing" | "not-observed";
        evidence: string;
        recommendation: string;
        verification: string;
        citations?: {
            file: string;
            start: number;
            end: number;
        }[] | undefined;
        endpoint?: {
            url: string;
            method: "GET";
            status: number;
        } | undefined;
        dependency?: {
            name: string;
            version: string;
            ecosystem: string;
            advisoryId: string;
            aliases: string[];
            fixedVersions: string[];
            summary: string;
            references: string[];
            metadataAvailable: boolean;
            locationExact: boolean;
        } | undefined;
        suppression?: {
            id: string;
            reason: string;
            createdAt: string;
        } | undefined;
    }[];
    secrets: {
        id: string;
        fingerprint: string;
        engine: string;
        rule: string;
        file: string;
        line: number;
        title: string;
        cwe: string;
        severity: "high" | "medium" | "critical" | "low" | "info";
        status: "confirmed" | "needs-review" | "dismissed";
        change: "unknown" | "new" | "existing" | "not-observed";
        evidence: string;
        recommendation: string;
        verification: string;
        citations?: {
            file: string;
            start: number;
            end: number;
        }[] | undefined;
        endpoint?: {
            url: string;
            method: "GET";
            status: number;
        } | undefined;
        dependency?: {
            name: string;
            version: string;
            ecosystem: string;
            advisoryId: string;
            aliases: string[];
            fixedVersions: string[];
            summary: string;
            references: string[];
            metadataAvailable: boolean;
            locationExact: boolean;
        } | undefined;
        suppression?: {
            id: string;
            reason: string;
            createdAt: string;
        } | undefined;
    }[];
    packages: import("./report-groups.js").ReportGroup[];
    runtime: {
        id: string;
        fingerprint: string;
        engine: string;
        rule: string;
        file: string;
        line: number;
        title: string;
        cwe: string;
        severity: "high" | "medium" | "critical" | "low" | "info";
        status: "confirmed" | "needs-review" | "dismissed";
        change: "unknown" | "new" | "existing" | "not-observed";
        evidence: string;
        recommendation: string;
        verification: string;
        citations?: {
            file: string;
            start: number;
            end: number;
        }[] | undefined;
        endpoint?: {
            url: string;
            method: "GET";
            status: number;
        } | undefined;
        dependency?: {
            name: string;
            version: string;
            ecosystem: string;
            advisoryId: string;
            aliases: string[];
            fixedVersions: string[];
            summary: string;
            references: string[];
            metadataAvailable: boolean;
            locationExact: boolean;
        } | undefined;
        suppression?: {
            id: string;
            reason: string;
            createdAt: string;
        } | undefined;
    }[];
    recheck: {
        id: string;
        fingerprint: string;
        engine: string;
        rule: string;
        file: string;
        line: number;
        title: string;
        cwe: string;
        severity: "high" | "medium" | "critical" | "low" | "info";
        status: "confirmed" | "needs-review" | "dismissed";
        change: "unknown" | "new" | "existing" | "not-observed";
        evidence: string;
        recommendation: string;
        verification: string;
        citations?: {
            file: string;
            start: number;
            end: number;
        }[] | undefined;
        endpoint?: {
            url: string;
            method: "GET";
            status: number;
        } | undefined;
        dependency?: {
            name: string;
            version: string;
            ecosystem: string;
            advisoryId: string;
            aliases: string[];
            fixedVersions: string[];
            summary: string;
            references: string[];
            metadataAvailable: boolean;
            locationExact: boolean;
        } | undefined;
        suppression?: {
            id: string;
            reason: string;
            createdAt: string;
        } | undefined;
    }[];
    dismissed: number;
};
export declare function renderSummary(report: Report, location: (file: string, line: number) => string): string;
