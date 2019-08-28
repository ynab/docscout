import got from 'got'
import merge from 'lodash/merge'
import * as http from 'http'
import { Readable } from 'stream'

interface InternalRequestOptions extends http.RequestOptions {
  // Redeclare options with `any` type for allow specify types incompatible with http.RequestOptions.
  timeout?: any
  agent?: any
}

// https://www.npmjs.com/package/got#goturl-options
interface GotOptions {
  url?: string | http.RequestOptions
  options?: http.RequestOptions
  baseUrl?: string
  headers?: http.OutgoingHttpHeaders
  stream?: boolean
  body?: string | Buffer | Readable | FormData | object
  cookieJar?: any
  encoding?: string | null
  form?: boolean
  json?: boolean
  query?: string | Record<string, any> | URLSearchParams
  timeout?: number | any
  retry?: number | any
  followRedirect?: boolean
  decompress?: boolean
  cache?: Cache
  useElectronNet?: boolean
  throwHttpErrors?: boolean
  agent?: http.Agent | boolean
  hooks?: Record<string, Function[]>
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

export async function get<T>(apiToken: string, path: string, params?: any): Promise<Response<T>> {
  const query = new URLSearchParams(params)
  const options = requestOptions(apiToken, { query })
  const response: Response<T> = await got.get(path, options)
  return response
}

export async function post<T>(apiToken: string, path: string, body?: any): Promise<Response<T>> {
  const options = requestOptions(apiToken, { body })
  const response: Response<T> = await got.post(path, options)
  return response
}
