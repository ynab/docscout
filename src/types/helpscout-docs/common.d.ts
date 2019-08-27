export type DateTime = string

export type Visibility = 'public' | 'private'

export type VisibilityParameter = 'all' | Visibility

export interface ItemsCollectionEnvelope<T> {
  page: number
  pages: number
  count: number
  items: T[]
}

export interface ErrorEnvelope {
  status: number
  message: string
}

export interface Person {
  id: number
  firstName: string
  lastName: string
}
