import { Visibility, ItemsCollectionEnvelope } from './common'

// https://developer.helpscout.com/docs-api/objects/collection/
export interface Collection {
  id: string
  number: number
  siteId: string
  slug: string
  visibility: Visibility
  order: number
  name: string
  createdBy: number
  updatedBy: number
  createdAt: string
  updatedAt: string
}

export interface ListCollectionsResponse {
  collections: ItemsCollectionEnvelope<Collection>
}

export interface GetCollectionResponse {
  collection: Collection
}
