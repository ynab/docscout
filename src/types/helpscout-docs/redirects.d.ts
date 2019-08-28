import { DateTime, ItemsCollectionEnvelope } from './common'

export type RedirectType = 'article' | 'category' | 'collection' | 'custom'

// https://developer.helpscout.com/docs-api/objects/redirect/
export interface Redirect {
  id: string
  siteId: string
  urlMapping: string
  type: RedirectType
  documentId: string
  anchor: string
  redirect: string
  createdBy: number
  updatedBy: number
  createdAt: DateTime
  updatedAt: DateTime
}

export interface RedirectUrl {
  type: RedirectType
  redirect: string
  slug: string
  number: number
  anchor: string
}

export type ListRedirectsResponse = ItemsCollectionEnvelope<Redirect>

export interface GetRedirect {
  redirect: Redirect
}

export interface FindRedirectResponse {
  redirectedUrl: RedirectUrl
}
