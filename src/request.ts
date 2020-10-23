import got, { OptionsOfJSONResponseBody } from 'got'
import merge from 'lodash/merge'
import { URLSearchParams } from 'url'

function requestOptions(apiToken: string, options: Partial<OptionsOfJSONResponseBody>): OptionsOfJSONResponseBody {
  const authorizationToken = Buffer.from(`${apiToken}:X`).toString('base64')
  return merge(
    {
      prefixUrl: 'https://docsapi.helpscout.net/v1/',
      headers: {
        Authorization: `Basic ${authorizationToken}`,
      },
      responseType: 'json',
    },
    options
  )
}

export async function get<T>(apiToken: string, path: string, params?: any) {
  const searchParams = new URLSearchParams(params)
  const options = requestOptions(apiToken, { searchParams })
  const response = await got.get<T>(path, options)
  return response
}

export async function post<T>(apiToken: string, path: string, body?: any) {
  const options = requestOptions(apiToken, { body })
  const response = await got.post<T>(path, options)
  return response
}
