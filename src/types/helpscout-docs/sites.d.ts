import { ItemsCollectionEnvelope, DateTime } from './common'

export type SiteStatus = 'active' | 'inactive'

// https://developer.helpscout.com/docs-api/objects/site/
export interface Site {
  id: string
  status: SiteStatus
  subDomain: string
  cname: string
  hasPublicSite: boolean
  companyName: string
  title: string
  logoUrl: string
  logoWidth: number
  logoHeight: number
  favIconUrl: string
  touchIconUrl: string
  homeUrl: string
  homeLinkText: string
  bgColor: string
  description: string
  hasContactForm: boolean
  mailboxId: string
  contactEmail: string
  styleSheetUrl: string
  headerCode: string
  createdBy: number
  updatedBy: number
  createdAt: DateTime
  updatedAt: DateTime
}

export type ListSitesResponse = ItemsCollectionEnvelope<Site>

export interface GetSiteResponse {
  site: Site
}
