interface ListSitesOptions {
    page?: number;
}
export declare function listSites(apiToken: string, options?: ListSitesOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").Site>>;
export {};
