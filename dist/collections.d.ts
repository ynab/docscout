import { ListCollectionsResponse, GetCollectionResponse, Collection, OrderParameter, VisibilityParameter } from './types/helpscout-docs';
export declare type CollectionSortParameter = 'number' | 'visibility' | 'order' | 'name' | 'createdAt' | 'updatedAt';
export interface ListCollectionsOptions {
    page?: number;
    siteId?: string;
    visibility?: VisibilityParameter;
    sort?: CollectionSortParameter;
    order?: OrderParameter;
}
export declare function listCollections(apiToken: string, options?: ListCollectionsOptions): Promise<ListCollectionsResponse>;
export interface ListAllcollectionsOptions {
    siteId?: string;
    visibility?: VisibilityParameter;
    sort?: CollectionSortParameter;
    order?: OrderParameter;
}
export declare function listAllCollections(apiToken: string, options?: ListAllcollectionsOptions): Promise<Collection[]>;
export declare function getCollection(apiToken: string, collectionIdOrNumber: string | number): Promise<GetCollectionResponse>;
