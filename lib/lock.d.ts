import type { FileHandle } from 'node:fs/promises';
/**
 * Exclusive PID lock file. The caller writes its PID after acquiring and removes the file on release.
 * Recovery only replaces a local lock owned by this user whose process is definitively gone.
 */
export declare function acquirePidLock(path: string, guardPath: string, locked: () => Error): Promise<FileHandle>;
