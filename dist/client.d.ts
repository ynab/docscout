import * as articles from './articles';
import * as assets from './assets';
import * as collections from './collections';
export declare class Client {
    private apiToken;
    constructor(apiToken: string);
    createArticleAsset(options: assets.CreateArticleAssetOptions): Promise<import("./types/helpscout-docs").CreateAssetReponse>;
    getArticle(articleIdOrNumber: string | number, options?: articles.GetArticleOptions): Promise<import("./types/helpscout-docs").Article>;
    getCollection(collectionIdOrNumber: string | number): Promise<import("./types/helpscout-docs").Collection>;
    getRevision(revisionId: string): Promise<import("./types/helpscout-docs").ArticleRevision>;
    listArticlesInCategory(categoryId: string, options?: articles.ListArticlesOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").ArticleRef>>;
    listArticlesInCollection(collectionId: string, options?: articles.ListArticlesOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").ArticleRef>>;
    listCollections(options?: collections.ListCollectionsOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").Collection>>;
    listRelatedArticles(articleId: string, options?: articles.ListRelatedArticlesOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").ArticleRef>>;
    listRevisions(articleId: string, options?: articles.ListRevisionsOptions): Promise<import("./types/helpscout-docs").ItemsCollectionEnvelope<import("./types/helpscout-docs").ArticleRevisionRef>>;
    searchArticles(options: articles.SearchArticlesOptions): Promise<void>;
}
