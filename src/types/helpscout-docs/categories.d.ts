import { DateTime, ItemsCollectionEnvelope, Visibility } from './common'

export type CategorySort = 'popularity' | 'name' | 'updatedAt' | 'custom'

// https://developer.helpscout.com/docs-api/objects/category/
export interface Category {
  id: string
  number: number
  slug: string
  visibility: Visibility
  collectionId: string
  order: number
  defaultSort: CategorySort
  name: string
  description: string
  articleCount: number
  publishedArticleCount: number
  publicUrl: string
  createdBy: number
  updatedBy: number
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ListCategoriesResponse {
  categories: ItemsCollectionEnvelope<Category>
}

export interface GetCategoryResponse {
  category: Category
}
