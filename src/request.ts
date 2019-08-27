import got from 'got'
import merge from 'lodash/merge'
import * as http from 'http'

interface InternalRequestOptions extends http.RequestOptions {
  // Redeclare options with `any` type for allow specify types incompatible with http.RequestOptions.
  timeout?: any
  agent?: any
}

interface GotOptions extends InternalRequestOptions {
  baseUrl?: string
  cookieJar?: any
  encoding?: string | null
  query?: Record<string, any> | URLSearchParams | string
  timeout?: number | any
  retry?: number | any
  followRedirect?: boolean
  decompress?: boolean
  useElectronNet?: boolean
  throwHttpErrors?: boolean
  agent?: http.Agent | boolean
  cache?: Cache
  request?: typeof http.request
}

interface Response<T> {
  request: GotOptions
  body: T
  url: string
  requestUrl: string
  timings: object
  fromCache: boolean
  redirectUrls: string[]
  retryCount: number
}

type OptionsResult = GotOptions & { headers: http.OutgoingHttpHeaders }

function requestOptions(apiToken: string, options: Partial<GotOptions>): OptionsResult {
  const authorizationToken = Buffer.from(`${apiToken}:X`).toString('base64')
  return merge(
    {
      baseUrl: 'https://docsapi.helpscout.net/v1',
      headers: {
        Authorization: `Basic ${authorizationToken}`
      },
      json: true
    },
    options
  )
}

export async function get<T>(apiToken: string, path: string, params: any): Promise<Response<T>> {
  const query = new URLSearchParams(params)
  const options = requestOptions(apiToken, { query })
  const response: Response<T> = await got.get(path, options)
  return response
}
