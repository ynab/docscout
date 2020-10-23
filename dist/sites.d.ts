import { ListSitesResponse } from './types/helpscout-docs';
interface ListSitesOptions {
    page?: number;
}
export declare function listSites(apiToken: string, options?: ListSitesOptions): Promise<ListSitesResponse>;
export {};
