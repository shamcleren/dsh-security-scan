/** Browser-safe configuration and wire contracts. No filesystem or scanner imports. */
import { z } from 'zod';
export declare const SECURITY_CHANNEL = "/security-scan";
/** Runtime checks target an explicit HTTP(S) service; credentials and fragments never enter stored config. */
export declare function dynamicTarget(value: string): URL;
export declare const RepairModeSchema: z.ZodEnum<{
    pr: "pr";
    local: "local";
}>;
export declare const RepairWorkspaceSchema: z.ZodObject<{
    repository: z.ZodString;
    repositoryUrl: z.ZodString;
    base: z.ZodString;
    commit: z.ZodString;
    branch: z.ZodString;
    directory: z.ZodString;
    target: z.ZodString;
    sourceIdentity: z.ZodString;
    prUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type RepairWorkspace = z.infer<typeof RepairWorkspaceSchema>;
export declare const TaskConfigSchema: z.ZodObject<{
    name: z.ZodString;
    kind: z.ZodEnum<{
        local: "local";
        remote: "remote";
    }>;
    target: z.ZodString;
    ref: z.ZodDefault<z.ZodString>;
    scope: z.ZodEnum<{
        full: "full";
        diff: "diff";
        staged: "staged";
    }>;
    baseline: z.ZodEnum<{
        git: "git";
        none: "none";
        report: "report";
    }>;
    base: z.ZodDefault<z.ZodString>;
    baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
    engine: z.ZodEnum<{
        auto: "auto";
        inventory: "inventory";
    }>;
    dependencies: z.ZodDefault<z.ZodBoolean>;
    secrets: z.ZodDefault<z.ZodBoolean>;
    syncSession: z.ZodDefault<z.ZodBoolean>;
    repairMode: z.ZodDefault<z.ZodEnum<{
        pr: "pr";
        local: "local";
    }>>;
    dynamicUrl: z.ZodDefault<z.ZodString>;
    dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
    view: z.ZodDefault<z.ZodEnum<{
        all: "all";
        new: "new";
    }>>;
    autoScan: z.ZodDefault<z.ZodBoolean>;
    agent: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        provider: z.ZodDefault<z.ZodString>;
        model: z.ZodDefault<z.ZodString>;
        maxSteps: z.ZodOptional<z.ZodNumber>;
        maxMinutes: z.ZodOptional<z.ZodNumber>;
        maxTokens: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type TaskConfig = z.infer<typeof TaskConfigSchema>;
export declare const TaskSchema: z.ZodObject<{
    id: z.ZodString;
    revision: z.ZodNumber;
    updatedAt: z.ZodString;
    config: z.ZodObject<{
        name: z.ZodString;
        kind: z.ZodEnum<{
            local: "local";
            remote: "remote";
        }>;
        target: z.ZodString;
        ref: z.ZodDefault<z.ZodString>;
        scope: z.ZodEnum<{
            full: "full";
            diff: "diff";
            staged: "staged";
        }>;
        baseline: z.ZodEnum<{
            git: "git";
            none: "none";
            report: "report";
        }>;
        base: z.ZodDefault<z.ZodString>;
        baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
        engine: z.ZodEnum<{
            auto: "auto";
            inventory: "inventory";
        }>;
        dependencies: z.ZodDefault<z.ZodBoolean>;
        secrets: z.ZodDefault<z.ZodBoolean>;
        syncSession: z.ZodDefault<z.ZodBoolean>;
        repairMode: z.ZodDefault<z.ZodEnum<{
            pr: "pr";
            local: "local";
        }>>;
        dynamicUrl: z.ZodDefault<z.ZodString>;
        dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
        view: z.ZodDefault<z.ZodEnum<{
            all: "all";
            new: "new";
        }>>;
        autoScan: z.ZodDefault<z.ZodBoolean>;
        agent: z.ZodDefault<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            provider: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            maxSteps: z.ZodOptional<z.ZodNumber>;
            maxMinutes: z.ZodOptional<z.ZodNumber>;
            maxTokens: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type Task = z.infer<typeof TaskSchema>;
export declare const RunSchema: z.ZodObject<{
    id: z.ZodString;
    taskId: z.ZodString;
    config: z.ZodObject<{
        name: z.ZodString;
        kind: z.ZodEnum<{
            local: "local";
            remote: "remote";
        }>;
        target: z.ZodString;
        ref: z.ZodDefault<z.ZodString>;
        scope: z.ZodEnum<{
            full: "full";
            diff: "diff";
            staged: "staged";
        }>;
        baseline: z.ZodEnum<{
            git: "git";
            none: "none";
            report: "report";
        }>;
        base: z.ZodDefault<z.ZodString>;
        baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
        engine: z.ZodEnum<{
            auto: "auto";
            inventory: "inventory";
        }>;
        dependencies: z.ZodDefault<z.ZodBoolean>;
        secrets: z.ZodDefault<z.ZodBoolean>;
        syncSession: z.ZodDefault<z.ZodBoolean>;
        repairMode: z.ZodDefault<z.ZodEnum<{
            pr: "pr";
            local: "local";
        }>>;
        dynamicUrl: z.ZodDefault<z.ZodString>;
        dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
        view: z.ZodDefault<z.ZodEnum<{
            all: "all";
            new: "new";
        }>>;
        autoScan: z.ZodDefault<z.ZodBoolean>;
        agent: z.ZodDefault<z.ZodObject<{
            enabled: z.ZodDefault<z.ZodBoolean>;
            provider: z.ZodDefault<z.ZodString>;
            model: z.ZodDefault<z.ZodString>;
            maxSteps: z.ZodOptional<z.ZodNumber>;
            maxMinutes: z.ZodOptional<z.ZodNumber>;
            maxTokens: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    status: z.ZodEnum<{
        partial: "partial";
        failed: "failed";
        cancelled: "cancelled";
        queued: "queued";
        running: "running";
        cancelling: "cancelling";
        succeeded: "succeeded";
        interrupted: "interrupted";
    }>;
    phase: z.ZodEnum<{
        dynamic: "dynamic";
        baseline: "baseline";
        finished: "finished";
        agent: "agent";
        report: "report";
        queued: "queued";
        preparing: "preparing";
        scanning: "scanning";
    }>;
    trigger: z.ZodEnum<{
        edit: "edit";
        manual: "manual";
        conversation: "conversation";
        repair: "repair";
    }>;
    createdAt: z.ZodString;
    finishedAt: z.ZodOptional<z.ZodString>;
    reportId: z.ZodOptional<z.ZodString>;
    rulesReportId: z.ZodOptional<z.ZodString>;
    reportRoot: z.ZodOptional<z.ZodString>;
    error: z.ZodOptional<z.ZodString>;
    previousReportId: z.ZodOptional<z.ZodString>;
    previousReportRoot: z.ZodOptional<z.ZodString>;
    repairSource: z.ZodOptional<z.ZodObject<{
        repository: z.ZodString;
        repositoryUrl: z.ZodString;
        base: z.ZodString;
        commit: z.ZodString;
        branch: z.ZodString;
        directory: z.ZodString;
        target: z.ZodString;
        sourceIdentity: z.ZodString;
        prUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    repair: z.ZodOptional<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<{
            pr: "pr";
            local: "local";
        }>>;
        workspace: z.ZodOptional<z.ZodObject<{
            repository: z.ZodString;
            repositoryUrl: z.ZodString;
            base: z.ZodString;
            commit: z.ZodString;
            branch: z.ZodString;
            directory: z.ZodString;
            target: z.ZodString;
            sourceIdentity: z.ZodString;
            prUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        admitted: z.ZodOptional<z.ZodBoolean>;
        requestId: z.ZodString;
        sessionId: z.ZodString;
        findingIds: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>;
    originSessionId: z.ZodOptional<z.ZodString>;
    repairSessionId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodOptional<z.ZodString>;
    sessionWarning: z.ZodOptional<z.ZodBoolean>;
    diagnostics: z.ZodOptional<z.ZodArray<z.ZodString>>;
    findings: z.ZodOptional<z.ZodNumber>;
    coverage: z.ZodOptional<z.ZodEnum<{
        partial: "partial";
        complete: "complete";
    }>>;
    resultSummary: z.ZodOptional<z.ZodObject<{
        confirmed: z.ZodNumber;
        pending: z.ZodNumber;
        dismissed: z.ZodNumber;
    }, z.core.$strict>>;
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
export type Run = z.infer<typeof RunSchema>;
export declare const SettingsSchema: z.ZodObject<{
    semgrepPath: z.ZodString;
    gitleaksPath: z.ZodString;
    reportDirectory: z.ZodString;
    autoScan: z.ZodBoolean;
    hookTools: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ScanSettings = z.infer<typeof SettingsSchema>;
export declare const ReportItemSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodString;
    source: z.ZodString;
    scope: z.ZodString;
    findings: z.ZodNumber;
    json: z.ZodString;
    html: z.ZodString;
    agent: z.ZodOptional<z.ZodObject<{
        model: z.ZodString;
        usageAvailable: z.ZodBoolean;
        inputTokens: z.ZodNumber;
        outputTokens: z.ZodNumber;
        cacheReadTokens: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strip>;
export type ReportItem = z.infer<typeof ReportItemSchema>;
export declare const ToolchainStateSchema: z.ZodObject<{
    status: z.ZodEnum<{
        failed: "failed";
        idle: "idle";
        installing: "installing";
        ready: "ready";
    }>;
    phase: z.ZodEnum<{
        gitleaks: "gitleaks";
        semgrep: "semgrep";
        idle: "idle";
        ready: "ready";
        checking: "checking";
        download: "download";
        python: "python";
    }>;
    semgrep: z.ZodString;
    gitleaks: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>;
export type ToolchainState = z.infer<typeof ToolchainStateSchema>;
export declare const ModelOptionSchema: z.ZodObject<{
    provider: z.ZodString;
    providerName: z.ZodString;
    model: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const ModelCatalogSchema: z.ZodObject<{
    models: z.ZodArray<z.ZodObject<{
        provider: z.ZodString;
        providerName: z.ZodString;
        model: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    partial: z.ZodBoolean;
}, z.core.$strip>;
export type ModelCatalog = z.infer<typeof ModelCatalogSchema>;
export type ModelOption = z.infer<typeof ModelOptionSchema>;
export declare const UiStateSchema: z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        revision: z.ZodNumber;
        updatedAt: z.ZodString;
        config: z.ZodObject<{
            name: z.ZodString;
            kind: z.ZodEnum<{
                local: "local";
                remote: "remote";
            }>;
            target: z.ZodString;
            ref: z.ZodDefault<z.ZodString>;
            scope: z.ZodEnum<{
                full: "full";
                diff: "diff";
                staged: "staged";
            }>;
            baseline: z.ZodEnum<{
                git: "git";
                none: "none";
                report: "report";
            }>;
            base: z.ZodDefault<z.ZodString>;
            baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
            engine: z.ZodEnum<{
                auto: "auto";
                inventory: "inventory";
            }>;
            dependencies: z.ZodDefault<z.ZodBoolean>;
            secrets: z.ZodDefault<z.ZodBoolean>;
            syncSession: z.ZodDefault<z.ZodBoolean>;
            repairMode: z.ZodDefault<z.ZodEnum<{
                pr: "pr";
                local: "local";
            }>>;
            dynamicUrl: z.ZodDefault<z.ZodString>;
            dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
            view: z.ZodDefault<z.ZodEnum<{
                all: "all";
                new: "new";
            }>>;
            autoScan: z.ZodDefault<z.ZodBoolean>;
            agent: z.ZodDefault<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                provider: z.ZodDefault<z.ZodString>;
                model: z.ZodDefault<z.ZodString>;
                maxSteps: z.ZodOptional<z.ZodNumber>;
                maxMinutes: z.ZodOptional<z.ZodNumber>;
                maxTokens: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
    }, z.core.$strict>>;
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        taskId: z.ZodString;
        config: z.ZodObject<{
            name: z.ZodString;
            kind: z.ZodEnum<{
                local: "local";
                remote: "remote";
            }>;
            target: z.ZodString;
            ref: z.ZodDefault<z.ZodString>;
            scope: z.ZodEnum<{
                full: "full";
                diff: "diff";
                staged: "staged";
            }>;
            baseline: z.ZodEnum<{
                git: "git";
                none: "none";
                report: "report";
            }>;
            base: z.ZodDefault<z.ZodString>;
            baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
            engine: z.ZodEnum<{
                auto: "auto";
                inventory: "inventory";
            }>;
            dependencies: z.ZodDefault<z.ZodBoolean>;
            secrets: z.ZodDefault<z.ZodBoolean>;
            syncSession: z.ZodDefault<z.ZodBoolean>;
            repairMode: z.ZodDefault<z.ZodEnum<{
                pr: "pr";
                local: "local";
            }>>;
            dynamicUrl: z.ZodDefault<z.ZodString>;
            dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
            view: z.ZodDefault<z.ZodEnum<{
                all: "all";
                new: "new";
            }>>;
            autoScan: z.ZodDefault<z.ZodBoolean>;
            agent: z.ZodDefault<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                provider: z.ZodDefault<z.ZodString>;
                model: z.ZodDefault<z.ZodString>;
                maxSteps: z.ZodOptional<z.ZodNumber>;
                maxMinutes: z.ZodOptional<z.ZodNumber>;
                maxTokens: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        status: z.ZodEnum<{
            partial: "partial";
            failed: "failed";
            cancelled: "cancelled";
            queued: "queued";
            running: "running";
            cancelling: "cancelling";
            succeeded: "succeeded";
            interrupted: "interrupted";
        }>;
        phase: z.ZodEnum<{
            dynamic: "dynamic";
            baseline: "baseline";
            finished: "finished";
            agent: "agent";
            report: "report";
            queued: "queued";
            preparing: "preparing";
            scanning: "scanning";
        }>;
        trigger: z.ZodEnum<{
            edit: "edit";
            manual: "manual";
            conversation: "conversation";
            repair: "repair";
        }>;
        createdAt: z.ZodString;
        finishedAt: z.ZodOptional<z.ZodString>;
        reportId: z.ZodOptional<z.ZodString>;
        rulesReportId: z.ZodOptional<z.ZodString>;
        reportRoot: z.ZodOptional<z.ZodString>;
        error: z.ZodOptional<z.ZodString>;
        previousReportId: z.ZodOptional<z.ZodString>;
        previousReportRoot: z.ZodOptional<z.ZodString>;
        repairSource: z.ZodOptional<z.ZodObject<{
            repository: z.ZodString;
            repositoryUrl: z.ZodString;
            base: z.ZodString;
            commit: z.ZodString;
            branch: z.ZodString;
            directory: z.ZodString;
            target: z.ZodString;
            sourceIdentity: z.ZodString;
            prUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        repair: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<{
                pr: "pr";
                local: "local";
            }>>;
            workspace: z.ZodOptional<z.ZodObject<{
                repository: z.ZodString;
                repositoryUrl: z.ZodString;
                base: z.ZodString;
                commit: z.ZodString;
                branch: z.ZodString;
                directory: z.ZodString;
                target: z.ZodString;
                sourceIdentity: z.ZodString;
                prUrl: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            admitted: z.ZodOptional<z.ZodBoolean>;
            requestId: z.ZodString;
            sessionId: z.ZodString;
            findingIds: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        originSessionId: z.ZodOptional<z.ZodString>;
        repairSessionId: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        sessionWarning: z.ZodOptional<z.ZodBoolean>;
        diagnostics: z.ZodOptional<z.ZodArray<z.ZodString>>;
        findings: z.ZodOptional<z.ZodNumber>;
        coverage: z.ZodOptional<z.ZodEnum<{
            partial: "partial";
            complete: "complete";
        }>>;
        resultSummary: z.ZodOptional<z.ZodObject<{
            confirmed: z.ZodNumber;
            pending: z.ZodNumber;
            dismissed: z.ZodNumber;
        }, z.core.$strict>>;
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
    }, z.core.$strict>>;
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodString;
        source: z.ZodString;
        scope: z.ZodString;
        findings: z.ZodNumber;
        json: z.ZodString;
        html: z.ZodString;
        agent: z.ZodOptional<z.ZodObject<{
            model: z.ZodString;
            usageAvailable: z.ZodBoolean;
            inputTokens: z.ZodNumber;
            outputTokens: z.ZodNumber;
            cacheReadTokens: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strip>>;
    settings: z.ZodObject<{
        semgrepPath: z.ZodString;
        gitleaksPath: z.ZodString;
        reportDirectory: z.ZodString;
        autoScan: z.ZodBoolean;
        hookTools: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    settingsWritable: z.ZodBoolean;
    toolchains: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<{
            failed: "failed";
            idle: "idle";
            installing: "installing";
            ready: "ready";
        }>;
        phase: z.ZodEnum<{
            gitleaks: "gitleaks";
            semgrep: "semgrep";
            idle: "idle";
            ready: "ready";
            checking: "checking";
            download: "download";
            python: "python";
        }>;
        semgrep: z.ZodString;
        gitleaks: z.ZodString;
        error: z.ZodString;
    }, z.core.$strip>>;
    agentDefault: z.ZodDefault<z.ZodNullable<z.ZodObject<{
        provider: z.ZodString;
        model: z.ZodString;
    }, z.core.$strip>>>;
    warnings: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type UiState = z.infer<typeof UiStateSchema>;
export declare const HookRequestSchema: z.ZodObject<{
    taskId: z.ZodString;
    revision: z.ZodNumber;
    event: z.ZodEnum<{
        "pre-commit": "pre-commit";
        "pre-push": "pre-push";
    }>;
    action: z.ZodEnum<{
        install: "install";
        remove: "remove";
    }>;
    enforce: z.ZodBoolean;
    base: z.ZodDefault<z.ZodString>;
    confirm: z.ZodLiteral<true>;
}, z.core.$strict>;
export type HookRequest = z.infer<typeof HookRequestSchema>;
export declare const FindingItemSchema: z.ZodObject<{
    category: z.ZodDefault<z.ZodEnum<{
        sourceRisk: "sourceRisk";
        dependencyRisk: "dependencyRisk";
        secretRisk: "secretRisk";
        dynamicRisk: "dynamicRisk";
    }>>;
    id: z.ZodString;
    title: z.ZodString;
    file: z.ZodString;
    line: z.ZodNumber;
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
    endpoint: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ReportActionsSchema: z.ZodObject<{
    findings: z.ZodArray<z.ZodObject<{
        category: z.ZodDefault<z.ZodEnum<{
            sourceRisk: "sourceRisk";
            dependencyRisk: "dependencyRisk";
            secretRisk: "secretRisk";
            dynamicRisk: "dynamicRisk";
        }>>;
        id: z.ZodString;
        title: z.ZodString;
        file: z.ZodString;
        line: z.ZodNumber;
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
        endpoint: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    run: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        taskId: z.ZodString;
        config: z.ZodObject<{
            name: z.ZodString;
            kind: z.ZodEnum<{
                local: "local";
                remote: "remote";
            }>;
            target: z.ZodString;
            ref: z.ZodDefault<z.ZodString>;
            scope: z.ZodEnum<{
                full: "full";
                diff: "diff";
                staged: "staged";
            }>;
            baseline: z.ZodEnum<{
                git: "git";
                none: "none";
                report: "report";
            }>;
            base: z.ZodDefault<z.ZodString>;
            baselineId: z.ZodDefault<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
            engine: z.ZodEnum<{
                auto: "auto";
                inventory: "inventory";
            }>;
            dependencies: z.ZodDefault<z.ZodBoolean>;
            secrets: z.ZodDefault<z.ZodBoolean>;
            syncSession: z.ZodDefault<z.ZodBoolean>;
            repairMode: z.ZodDefault<z.ZodEnum<{
                pr: "pr";
                local: "local";
            }>>;
            dynamicUrl: z.ZodDefault<z.ZodString>;
            dynamicAuthorized: z.ZodDefault<z.ZodBoolean>;
            view: z.ZodDefault<z.ZodEnum<{
                all: "all";
                new: "new";
            }>>;
            autoScan: z.ZodDefault<z.ZodBoolean>;
            agent: z.ZodDefault<z.ZodObject<{
                enabled: z.ZodDefault<z.ZodBoolean>;
                provider: z.ZodDefault<z.ZodString>;
                model: z.ZodDefault<z.ZodString>;
                maxSteps: z.ZodOptional<z.ZodNumber>;
                maxMinutes: z.ZodOptional<z.ZodNumber>;
                maxTokens: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
        }, z.core.$strict>;
        status: z.ZodEnum<{
            partial: "partial";
            failed: "failed";
            cancelled: "cancelled";
            queued: "queued";
            running: "running";
            cancelling: "cancelling";
            succeeded: "succeeded";
            interrupted: "interrupted";
        }>;
        phase: z.ZodEnum<{
            dynamic: "dynamic";
            baseline: "baseline";
            finished: "finished";
            agent: "agent";
            report: "report";
            queued: "queued";
            preparing: "preparing";
            scanning: "scanning";
        }>;
        trigger: z.ZodEnum<{
            edit: "edit";
            manual: "manual";
            conversation: "conversation";
            repair: "repair";
        }>;
        createdAt: z.ZodString;
        finishedAt: z.ZodOptional<z.ZodString>;
        reportId: z.ZodOptional<z.ZodString>;
        rulesReportId: z.ZodOptional<z.ZodString>;
        reportRoot: z.ZodOptional<z.ZodString>;
        error: z.ZodOptional<z.ZodString>;
        previousReportId: z.ZodOptional<z.ZodString>;
        previousReportRoot: z.ZodOptional<z.ZodString>;
        repairSource: z.ZodOptional<z.ZodObject<{
            repository: z.ZodString;
            repositoryUrl: z.ZodString;
            base: z.ZodString;
            commit: z.ZodString;
            branch: z.ZodString;
            directory: z.ZodString;
            target: z.ZodString;
            sourceIdentity: z.ZodString;
            prUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        repair: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<{
                pr: "pr";
                local: "local";
            }>>;
            workspace: z.ZodOptional<z.ZodObject<{
                repository: z.ZodString;
                repositoryUrl: z.ZodString;
                base: z.ZodString;
                commit: z.ZodString;
                branch: z.ZodString;
                directory: z.ZodString;
                target: z.ZodString;
                sourceIdentity: z.ZodString;
                prUrl: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            admitted: z.ZodOptional<z.ZodBoolean>;
            requestId: z.ZodString;
            sessionId: z.ZodString;
            findingIds: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        originSessionId: z.ZodOptional<z.ZodString>;
        repairSessionId: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        sessionWarning: z.ZodOptional<z.ZodBoolean>;
        diagnostics: z.ZodOptional<z.ZodArray<z.ZodString>>;
        findings: z.ZodOptional<z.ZodNumber>;
        coverage: z.ZodOptional<z.ZodEnum<{
            partial: "partial";
            complete: "complete";
        }>>;
        resultSummary: z.ZodOptional<z.ZodObject<{
            confirmed: z.ZodNumber;
            pending: z.ZodNumber;
            dismissed: z.ZodNumber;
        }, z.core.$strict>>;
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
    }, z.core.$strict>>;
    repairable: z.ZodBoolean;
    repairMode: z.ZodDefault<z.ZodEnum<{
        pr: "pr";
        local: "local";
    }>>;
    prPreview: z.ZodOptional<z.ZodObject<{
        repositoryUrl: z.ZodString;
        base: z.ZodString;
        commit: z.ZodString;
        revision: z.ZodString;
    }, z.core.$strip>>;
    prError: z.ZodOptional<z.ZodString>;
    comparison: z.ZodOptional<z.ZodObject<{
        previousId: z.ZodString;
        comparable: z.ZodBoolean;
        items: z.ZodArray<z.ZodObject<{
            category: z.ZodDefault<z.ZodEnum<{
                sourceRisk: "sourceRisk";
                dependencyRisk: "dependencyRisk";
                secretRisk: "secretRisk";
                dynamicRisk: "dynamicRisk";
            }>>;
            id: z.ZodString;
            title: z.ZodString;
            file: z.ZodString;
            line: z.ZodNumber;
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
            endpoint: z.ZodOptional<z.ZodString>;
            change: z.ZodEnum<{
                notObserved: "notObserved";
                remaining: "remaining";
                added: "added";
                unverified: "unverified";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    repairChain: z.ZodOptional<z.ZodObject<{
        sessionId: z.ZodString;
        round: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strip>;
export type ReportActions = z.infer<typeof ReportActionsSchema>;
export declare const RepairRequestSchema: z.ZodObject<{
    id: z.ZodString;
    findingIds: z.ZodArray<z.ZodString>;
    mode: z.ZodEnum<{
        pr: "pr";
        local: "local";
    }>;
    expectedRevision: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type UiRemote = {
    reportActions(id: string): Promise<ReportActions>;
    repair(id: string, findingIds: string[], mode: 'pr' | 'local', expectedRevision?: string): Promise<{
        sessionId: string;
    }>;
    continueRepair(id: string): Promise<{
        sessionId: string;
        count: number;
    }>;
    rescan(id: string): Promise<Run>;
    models(): Promise<ModelCatalog>;
    state(): Promise<UiState>;
    setup(): Promise<void>;
    save(config: TaskConfig, id?: string, revision?: number): Promise<Task>;
    remove(id: string, revision: number): Promise<void>;
    removeRun(id: string): Promise<void>;
    removeReport(id: string): Promise<void>;
    run(id: string, revision: number): Promise<Run>;
    cancel(id: string): Promise<void>;
    settings(value: ScanSettings): Promise<void>;
    hook(request: HookRequest): Promise<void>;
    source(id: string, file: string, line: number): Promise<{
        content: string;
    }>;
    report(id: string, format: 'html' | 'json'): Promise<string>;
};
export declare const newTask: () => TaskConfig;
