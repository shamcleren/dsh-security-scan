import { type EvidenceArchive } from './report-evidence.js';
import { z } from 'zod';
import { type AgentAudit } from './agent-contract.js';
import { type ReportItem } from './ui-contract.js';
export declare const ReviewSchema: z.ZodObject<{
    findingId: z.ZodString;
    status: z.ZodEnum<{
        confirmed: "confirmed";
        "needs-review": "needs-review";
        dismissed: "dismissed";
    }>;
    severity: z.ZodEnum<{
        high: "high";
        medium: "medium";
        critical: "critical";
        low: "low";
        info: "info";
    }>;
    evidence: z.ZodString;
    recommendation: z.ZodString;
    verification: z.ZodString;
    reviewer: z.ZodString;
    citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        start: z.ZodNumber;
        end: z.ZodNumber;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export declare const FindingSchema: z.ZodObject<{
    id: z.ZodString;
    fingerprint: z.ZodString;
    engine: z.ZodString;
    rule: z.ZodString;
    file: z.ZodString;
    line: z.ZodNumber;
    title: z.ZodString;
    cwe: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        medium: "medium";
        critical: "critical";
        low: "low";
        info: "info";
    }>;
    status: z.ZodEnum<{
        confirmed: "confirmed";
        "needs-review": "needs-review";
        dismissed: "dismissed";
    }>;
    change: z.ZodEnum<{
        unknown: "unknown";
        new: "new";
        existing: "existing";
        "not-observed": "not-observed";
    }>;
    evidence: z.ZodString;
    recommendation: z.ZodString;
    verification: z.ZodString;
    citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        start: z.ZodNumber;
        end: z.ZodNumber;
    }, z.core.$strict>>>;
    endpoint: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        method: z.ZodLiteral<"GET">;
        status: z.ZodNumber;
    }, z.core.$strict>>;
    dependency: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodString;
        ecosystem: z.ZodString;
        advisoryId: z.ZodString;
        aliases: z.ZodArray<z.ZodString>;
        fixedVersions: z.ZodArray<z.ZodString>;
        summary: z.ZodString;
        references: z.ZodArray<z.ZodString>;
        metadataAvailable: z.ZodBoolean;
        locationExact: z.ZodBoolean;
    }, z.core.$strict>>;
    suppression: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        reason: z.ZodString;
        createdAt: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const PLUGIN_VERSION: "0.17.1";
export declare const ReportSchema: z.ZodObject<{
    schemaVersion: z.ZodLiteral<1>;
    pluginVersion: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    source: z.ZodObject<{
        identity: z.ZodString;
        label: z.ZodString;
        revision: z.ZodEnum<{
            index: "index";
            commit: "commit";
            "working-tree": "working-tree";
        }>;
        scope: z.ZodEnum<{
            full: "full";
            diff: "diff";
            staged: "staged";
        }>;
        commit: z.ZodOptional<z.ZodString>;
        baseCommit: z.ZodOptional<z.ZodString>;
        digest: z.ZodString;
        files: z.ZodRecord<z.ZodString, z.ZodString>;
        changed: z.ZodArray<z.ZodString>;
        skipped: z.ZodNumber;
    }, z.core.$strict>;
    policy: z.ZodObject<{
        engine: z.ZodString;
        rulesDigest: z.ZodString;
        dependencies: z.ZodBoolean;
        secrets: z.ZodBoolean;
        view: z.ZodEnum<{
            all: "all";
            new: "new";
        }>;
        failOn: z.ZodEnum<{
            none: "none";
            high: "high";
            medium: "medium";
        }>;
        dynamic: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    engines: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodString;
        status: z.ZodEnum<{
            skipped: "skipped";
            completed: "completed";
            partial: "partial";
            unavailable: "unavailable";
            failed: "failed";
        }>;
        detail: z.ZodString;
    }, z.core.$strict>>;
    coverage: z.ZodObject<{
        files: z.ZodNumber;
        scannedFiles: z.ZodNumber;
        omittedFindings: z.ZodNumber;
        detail: z.ZodString;
    }, z.core.$strict>;
    findings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        fingerprint: z.ZodString;
        engine: z.ZodString;
        rule: z.ZodString;
        file: z.ZodString;
        line: z.ZodNumber;
        title: z.ZodString;
        cwe: z.ZodString;
        severity: z.ZodEnum<{
            high: "high";
            medium: "medium";
            critical: "critical";
            low: "low";
            info: "info";
        }>;
        status: z.ZodEnum<{
            confirmed: "confirmed";
            "needs-review": "needs-review";
            dismissed: "dismissed";
        }>;
        change: z.ZodEnum<{
            unknown: "unknown";
            new: "new";
            existing: "existing";
            "not-observed": "not-observed";
        }>;
        evidence: z.ZodString;
        recommendation: z.ZodString;
        verification: z.ZodString;
        citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            start: z.ZodNumber;
            end: z.ZodNumber;
        }, z.core.$strict>>>;
        endpoint: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
            method: z.ZodLiteral<"GET">;
            status: z.ZodNumber;
        }, z.core.$strict>>;
        dependency: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            version: z.ZodString;
            ecosystem: z.ZodString;
            advisoryId: z.ZodString;
            aliases: z.ZodArray<z.ZodString>;
            fixedVersions: z.ZodArray<z.ZodString>;
            summary: z.ZodString;
            references: z.ZodArray<z.ZodString>;
            metadataAvailable: z.ZodBoolean;
            locationExact: z.ZodBoolean;
        }, z.core.$strict>>;
        suppression: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            reason: z.ZodString;
            createdAt: z.ZodString;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    baseline: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        comparable: z.ZodBoolean;
        reason: z.ZodString;
        notObserved: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            fingerprint: z.ZodString;
            engine: z.ZodString;
            rule: z.ZodString;
            file: z.ZodString;
            line: z.ZodNumber;
            title: z.ZodString;
            cwe: z.ZodString;
            severity: z.ZodEnum<{
                high: "high";
                medium: "medium";
                critical: "critical";
                low: "low";
                info: "info";
            }>;
            status: z.ZodEnum<{
                confirmed: "confirmed";
                "needs-review": "needs-review";
                dismissed: "dismissed";
            }>;
            change: z.ZodEnum<{
                unknown: "unknown";
                new: "new";
                existing: "existing";
                "not-observed": "not-observed";
            }>;
            evidence: z.ZodString;
            recommendation: z.ZodString;
            verification: z.ZodString;
            citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                file: z.ZodString;
                start: z.ZodNumber;
                end: z.ZodNumber;
            }, z.core.$strict>>>;
            endpoint: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                method: z.ZodLiteral<"GET">;
                status: z.ZodNumber;
            }, z.core.$strict>>;
            dependency: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                version: z.ZodString;
                ecosystem: z.ZodString;
                advisoryId: z.ZodString;
                aliases: z.ZodArray<z.ZodString>;
                fixedVersions: z.ZodArray<z.ZodString>;
                summary: z.ZodString;
                references: z.ZodArray<z.ZodString>;
                metadataAvailable: z.ZodBoolean;
                locationExact: z.ZodBoolean;
            }, z.core.$strict>>;
            suppression: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                reason: z.ZodString;
                createdAt: z.ZodString;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strip>>;
    evidenceArchive: z.ZodOptional<z.ZodObject<{
        snippets: z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            start: z.ZodNumber;
            lines: z.ZodArray<z.ZodString>;
            sourceHash: z.ZodString;
            redacted: z.ZodBoolean;
        }, z.core.$strict>>;
        omitted: z.ZodNumber;
    }, z.core.$strict>>;
    reviews: z.ZodArray<z.ZodObject<{
        findingId: z.ZodString;
        status: z.ZodEnum<{
            confirmed: "confirmed";
            "needs-review": "needs-review";
            dismissed: "dismissed";
        }>;
        severity: z.ZodEnum<{
            high: "high";
            medium: "medium";
            critical: "critical";
            low: "low";
            info: "info";
        }>;
        evidence: z.ZodString;
        recommendation: z.ZodString;
        verification: z.ZodString;
        reviewer: z.ZodString;
        citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            start: z.ZodNumber;
            end: z.ZodNumber;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
    notes: z.ZodArray<z.ZodString>;
    parentReport: z.ZodOptional<z.ZodString>;
    agent: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<{
            completed: "completed";
            incomplete: "incomplete";
        }>;
        reason: z.ZodEnum<{
            completed: "completed";
            "step-limit": "step-limit";
            "time-limit": "time-limit";
            "context-limit": "context-limit";
            "output-limit": "output-limit";
            "model-unavailable": "model-unavailable";
            "preset-unavailable": "preset-unavailable";
            "model-failed": "model-failed";
            "invalid-response": "invalid-response";
            "evidence-unavailable": "evidence-unavailable";
            cancelled: "cancelled";
        }>;
        preset: z.ZodOptional<z.ZodString>;
        nativeEnd: z.ZodOptional<z.ZodString>;
        nativeErrorCode: z.ZodOptional<z.ZodString>;
        provider: z.ZodString;
        model: z.ZodString;
        steps: z.ZodNumber;
        areas: z.ZodArray<z.ZodEnum<{
            "entry-points": "entry-points";
            authentication: "authentication";
            authorization: "authorization";
            injection: "injection";
            "data-exposure": "data-exposure";
            "business-logic": "business-logic";
        }>>;
        files: z.ZodArray<z.ZodString>;
        eligibleCandidates: z.ZodOptional<z.ZodNumber>;
        excludedCandidates: z.ZodOptional<z.ZodNumber>;
        reviewedFindings: z.ZodNumber;
        additionalFindings: z.ZodDefault<z.ZodNumber>;
        inputTokens: z.ZodNumber;
        outputTokens: z.ZodNumber;
        cacheReadTokens: z.ZodDefault<z.ZodNumber>;
        cacheWriteTokens: z.ZodDefault<z.ZodNumber>;
        usageAvailable: z.ZodBoolean;
        events: z.ZodArray<z.ZodObject<{
            step: z.ZodNumber;
            kind: z.ZodEnum<{
                planning: "planning";
                listing: "listing";
                reading: "reading";
                reviewing: "reviewing";
                rejected: "rejected";
                finished: "finished";
            }>;
            files: z.ZodDefault<z.ZodArray<z.ZodString>>;
            code: z.ZodOptional<z.ZodString>;
            count: z.ZodDefault<z.ZodNumber>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type Report = z.infer<typeof ReportSchema>;
export type Finding = z.infer<typeof FindingSchema>;
export declare const AdditionalFindingSchema: z.ZodObject<{
    file: z.ZodString;
    status: z.ZodEnum<{
        confirmed: "confirmed";
        "needs-review": "needs-review";
        dismissed: "dismissed";
    }>;
    title: z.ZodString;
    line: z.ZodNumber;
    cwe: z.ZodString;
    severity: z.ZodEnum<{
        high: "high";
        medium: "medium";
        critical: "critical";
        low: "low";
        info: "info";
    }>;
    citations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        start: z.ZodNumber;
        end: z.ZodNumber;
    }, z.core.$strict>>>;
    evidence: z.ZodString;
    recommendation: z.ZodString;
    verification: z.ZodString;
}, z.core.$strict>;
export type AdditionalFinding = z.infer<typeof AdditionalFindingSchema>;
export type Review = z.infer<typeof ReviewSchema>;
export declare const defaultReportsRoot: () => string;
export declare function readReport(file: string): Promise<Report>;
export declare function writeReport(root: string, value: Report, draft?: boolean): Promise<{
    json: string;
    html: string;
}>;
/** Reviews create another immutable JSON/HTML pair, preserving original scanner evidence. */
export declare function reviewReport(file: string, reviews: Review[], root: string, additional?: AdditionalFinding[], agent?: AgentAudit, retainParent?: boolean, reportId?: `${string}-${string}-${string}-${string}-${string}`, evidenceArchive?: EvidenceArchive): Promise<{
    json: string;
    html: string;
}>;
export declare function exitCode(report: Report): number;
export declare function reportFile(root: string, id: string): string;
/** Quarantine an owned report pair before changing history; never recursively remove user content. */
export declare function stageReportDeletion(file: string, id: string): Promise<{
    restore(): Promise<void>;
    finish(): Promise<void>;
}>;
export declare function listReports(root: string, source?: string): Promise<ReportItem[]>;
export declare function renderReport(input: Report): string;
export declare function sarif(report: Report): unknown;
