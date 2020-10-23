import * as articles from './articles'
import * as assets from './assets'
import * as collections from './collections'

export class Client {
  private apiToken: string

  constructor(apiToken: string) {
    this.apiToken = apiToken
  }

  public async createArticleAsset(options: assets.CreateArticleAssetOptions) {
    const asset = await assets.createArticleAsset(this.apiToken, options)
    return asset
  }

  public async getArticle(articleIdOrNumber: string | number, options?: articles.GetArticleOptions) {
    const envelope = await articles.getArticle(this.apiToken, articleIdOrNumber, options)
    return envelope.article
  }

  public async getCollection(collectionIdOrNumber: string | number) {
    const envelope = await collections.getCollection(this.apiToken, collectionIdOrNumber)
    return envelope.collection
  }

  public async getRevision(revisionId: string) {
    const envelope = await articles.getRevision(this.apiToken, revisionId)
    return envelope.revision
  }

  public async listArticlesInCategory(categoryId: string, options?: articles.ListArticlesOptions) {
    const envelope = await articles.listArticlesInCategory(this.apiToken, categoryId, options)
    return envelope.articles
  }

  public async listArticlesInCollection(collectionId: string, options?: articles.ListArticlesOptions) {
    const envelope = await articles.listArticlesInCollection(this.apiToken, collectionId, options)
    return envelope.articles
  }

  public async listCollections(options?: collections.ListCollectionsOptions) {
    const envelope = await collections.listCollections(this.apiToken, options)
    return envelope.collections
  }

  public async listRelatedArticles(articleId: string, options?: articles.ListRelatedArticlesOptions) {
    const envelope = await articles.listRelatedArticles(this.apiToken, articleId, options)
    return envelope.articles
  }

  public async listRevisions(articleId: string, options?: articles.ListRevisionsOptions) {
    const envelope = await articles.listRevisions(this.apiToken, articleId, options)
    return envelope.revisions
  }

  public async searchArticles(options: articles.SearchArticlesOptions) {
    const envelope = await articles.searchArticles(this.apiToken, options)
    return envelope.articles
  }
}
