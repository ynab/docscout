import { ListSitesResponse } from './types/helpscout-docs'
import { get } from './request'

interface ListSitesOptions {
  page?: number
}

export async function listSites(apiToken: string, options?: ListSitesOptions) {
  const response = await get<ListSitesResponse>(apiToken, 'sites', options)
  return response.body
}
