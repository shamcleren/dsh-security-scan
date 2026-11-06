import { z } from 'zod';
import type { Report } from './report.js';
export declare const ArchiveSchema: z.ZodObject<{
    snippets: z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        start: z.ZodNumber;
        lines: z.ZodArray<z.ZodString>;
        sourceHash: z.ZodString;
        redacted: z.ZodBoolean;
    }, z.core.$strict>>;
    omitted: z.ZodNumber;
}, z.core.$strict>;
export type EvidenceArchive = z.infer<typeof ArchiveSchema>;
export declare function redactText(value: string): string;
/** Archive only bounded, redacted evidence; never export a complete repository. */
export declare function addExcerpt(archive: EvidenceArchive, report: Report, file: string, start: number, lines: string[]): void;
export declare function mergeArchives(report: Report, additions?: EvidenceArchive): EvidenceArchive;
export declare function captureScanEvidence(report: Report, root: string): Promise<EvidenceArchive>;
