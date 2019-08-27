import { DateTime, CollectionEnvelope } from './common'

// https://developer.helpscout.com/docs-api/objects/category/
export interface Category {
  id: string
  number: number
  slug: string
  collectionId: string
  order: number
  name: string
  createdBy: number
  updatedBy: number
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ListCategoriesResponse {
  categories: CollectionEnvelope<Category>
}

export interface GetCategoryResponse {
  category: Category
}
