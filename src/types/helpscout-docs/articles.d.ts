import { DateTime, ItemsCollectionEnvelope, Visibility, Person } from './common'

export type ArticleStatus = 'published' | 'notpublished'

// https://developer.helpscout.com/docs-api/objects/article-search/
export interface ArticleSearch {
  id: string
  collectionId: string
  categoryIds: string[]
  slug: string
  name: string
  preview: string
  url: string
  docsUrl: string
  number: number
  status: ArticleStatus
  visibility: Visibility
}

// https://developer.helpscout.com/docs-api/objects/article-ref/
export interface ArticleRef {
  id: string
  number: number
  collectionId: string
  slug: string
  status: ArticleStatus
  hasDraft: boolean
  name: string
  publicUrl: string
  popularity: number
  viewCount: number
  createdBy: number
  updatedBy: number
  createdAt: DateTime
  updatedAt: DateTime
  lastPublishedAt: DateTime
}

// https://developer.helpscout.com/docs-api/objects/article/
export type Article = ArticleRef & {
  text: string
  categories: string[]
  related: string[]
  keywords: string[]
}

// https://developer.helpscout.com/docs-api/objects/article-revision-ref/
export interface ArticleRevisionRef {
  // The id of the article.
  id: string
  articleId: string
  createdBy: Person
  createdAt: DateTime
}

// https://developer.helpscout.com/docs-api/objects/article-revision/
export type ArticleRevision = ArticleRevisionRef & {
  // The text of the article.
  text: string
}

//
// RESPONSES
//

interface ArticlesCollectionResponse<T> {
  articles: ItemsCollectionEnvelope<T>
}

export type ListArticlesResponse = ArticlesCollectionResponse<ArticleRef>

export type SearchArticlesResponse = ArticlesCollectionResponse<ArticleSearch>

export type ListRelatedArticlesResponse = ArticlesCollectionResponse<ArticleRef>

export interface ListRevisionsResponse {
  revisions: ItemsCollectionEnvelope<ArticleRevisionRef>
}

export interface GetArticleResponse {
  article: Article
}

export interface GetRevisionResponse {
  revision: ArticleRevision
}
