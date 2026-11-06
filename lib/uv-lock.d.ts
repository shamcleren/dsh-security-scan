/** Read uv schema v1 without resolving markers, following URLs, or importing project metadata. */
export declare function parseUvLock(text: string): {
    packages: Array<{
        name: string;
        version: string;
    }>;
    projects: string[];
    unsupported: number;
};
