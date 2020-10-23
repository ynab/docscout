import {
  ArticleStatus,
  GetArticleResponse,
  GetRevisionResponse,
  ListArticlesResponse,
  ListRelatedArticlesResponse,
  ListRevisionsResponse,
  OrderParameter,
  SearchArticlesResponse,
  VisibilityParameter,
} from './types/helpscout-docs'
import { get } from './request'

type ArticleStatusParameter = 'all' | ArticleStatus

type ArticleSortParameter = 'number' | 'status' | 'name' | 'popularity' | 'createdAt' | 'updatedAt'

export interface ListArticlesOptions {
  page?: number
  status?: ArticleStatusParameter
  sort?: ArticleSortParameter
  order?: OrderParameter
  pageSize?: number
}

export async function listArticlesInCollection(apiToken: string, collectionId: string, options?: ListArticlesOptions) {
  const path = `collections/${collectionId}/articles`
  const response = await get<ListArticlesResponse>(apiToken, path, options)
  return response.body
}

export async function listArticlesInCategory(apiToken: string, categoryId: string, options?: ListArticlesOptions) {
  const path = `categories/${categoryId}/articles`
  const response = await get<ListArticlesResponse>(apiToken, path, options)
  return response.body
}

export interface SearchArticlesOptions {
  page?: number
  query: string
  collectionId?: string
  siteId?: string
  status?: ArticleStatusParameter
  visibility?: VisibilityParameter
}

export async function searchArticles(apiToken: string, options: SearchArticlesOptions) {
  const path = 'search/articles'
  const response = await get<SearchArticlesResponse>(apiToken, path, options)
  return response.body
}

export interface ListRelatedArticlesOptions {
  page?: number
  status?: ArticleStatusParameter
  sort?: ArticleSortParameter
  order?: OrderParameter
}

export async function listRelatedArticles(apiToken: string, articleId: string, options?: ListRelatedArticlesOptions) {
  const path = `articles/${articleId}/related`
  const response = await get<ListRelatedArticlesResponse>(apiToken, path, options)
  return response.body
}

export interface ListRevisionsOptions {
  page?: number
}

export async function listRevisions(apiToken: string, articleId: string, options?: ListRevisionsOptions) {
  const path = `articles/${articleId}/revisions`
  const response = await get<ListRevisionsResponse>(apiToken, path, options)
  return response.body
}

export interface GetArticleOptions {
  draft?: boolean
}

export async function getArticle(apiToken: string, articleIdOrNumber: string | number, options?: GetArticleOptions) {
  const path = `articles/${articleIdOrNumber}`
  const response = await get<GetArticleResponse>(apiToken, path, options)
  return response.body
}

export async function getRevision(apiToken: string, revisionId: string) {
  const path = `revisions/${revisionId}`
  const response = await get<GetRevisionResponse>(apiToken, path)
  return response.body
}
