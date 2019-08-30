import { ArticleStatus, GetArticleResponse, GetRevisionResponse, ListRevisionsResponse, OrderParameter, VisibilityParameter } from './types/helpscout-docs';
declare type ArticleStatusParameter = 'all' | ArticleStatus;
declare type ArticleSortParameter = 'number' | 'status' | 'name' | 'popularity' | 'createdAt' | 'updatedAt';
export interface ListArticlesOptions {
    page?: number;
    status?: ArticleStatusParameter;
    sort?: ArticleSortParameter;
    order?: OrderParameter;
    pageSize?: number;
}
export declare function listArticlesInCollection(apiToken: string, collectionId: string, options?: ListArticlesOptions): Promise<import("./types/helpscout-docs").ArticlesCollectionResponse<import("./types/helpscout-docs").ArticleRef>>;
export declare function listArticlesInCategory(apiToken: string, categoryId: string, options?: ListArticlesOptions): Promise<import("./types/helpscout-docs").ArticlesCollectionResponse<import("./types/helpscout-docs").ArticleRef>>;
export interface SearchArticlesOptions {
    page?: number;
    query: string;
    collectionId?: string;
    siteId?: string;
    status?: ArticleStatusParameter;
    visibility?: VisibilityParameter;
}
export declare function searchArticles(apiToken: string, options: SearchArticlesOptions): Promise<import("./types/helpscout-docs").ArticlesCollectionResponse<import("./types/helpscout-docs").ArticleSearch>>;
export interface ListRelatedArticlesOptions {
    page?: number;
    status?: ArticleStatusParameter;
    sort?: ArticleSortParameter;
    order?: OrderParameter;
}
export declare function listRelatedArticles(apiToken: string, articleId: string, options?: ListRelatedArticlesOptions): Promise<import("./types/helpscout-docs").ArticlesCollectionResponse<import("./types/helpscout-docs").ArticleRef>>;
export interface ListRevisionsOptions {
    page?: number;
}
export declare function listRevisions(apiToken: string, articleId: string, options?: ListRevisionsOptions): Promise<ListRevisionsResponse>;
export interface GetArticleOptions {
    draft?: boolean;
}
export declare function getArticle(apiToken: string, articleIdOrNumber: string | number, options?: GetArticleOptions): Promise<GetArticleResponse>;
export declare function getRevision(apiToken: string, revisionId: string): Promise<GetRevisionResponse>;
export {};
