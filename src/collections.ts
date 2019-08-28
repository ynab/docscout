import { get } from './request'
import {
  ListCollectionsResponse,
  GetCollectionResponse,
  Collection,
  OrderParameter,
  VisibilityParameter
} from './types/helpscout-docs'

export type CollectionSortParameter = 'number' | 'visibility' | 'order' | 'name' | 'createdAt' | 'updatedAt'

export interface ListCollectionsOptions {
  page?: number
  siteId?: string
  visibility?: VisibilityParameter
  sort?: CollectionSortParameter
  order?: OrderParameter
}

export async function listCollections(apiToken: string, options?: ListCollectionsOptions) {
  const response = await get<ListCollectionsResponse>(apiToken, '/collections', options)
  return response.body
}

export interface ListAllcollectionsOptions {
  siteId?: string
  visibility?: VisibilityParameter
  sort?: CollectionSortParameter
  order?: OrderParameter
}

export async function listAllCollections(apiToken: string, options?: ListAllcollectionsOptions) {
  const collections: Collection[] = []
  const baseOptions = Object.assign({}, options)

  let currentPage = 1
  let totalPages = 1
  while (currentPage <= totalPages) {
    const currentOptions = Object.assign({}, baseOptions, { page: currentPage })
    const result = await listCollections(apiToken, currentOptions)
    collections.splice(-1, 0, ...result.collections.items)
    totalPages = result.collections.pages
    currentPage += 1
  }

  return collections
}

export async function getCollection(apiToken: string, collectionIdOrNumber: string | number) {
  const response = await get<GetCollectionResponse>(apiToken, `/collections/${collectionIdOrNumber}`)
  return response.body
}
