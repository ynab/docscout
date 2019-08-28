import FormData from 'form-data'
import * as fs from 'fs'
import { basename } from 'path'
import { post } from './request'
import { CreateArticleAssetResponse } from './types/helpscout-docs'
import { Stream } from 'stream'

type AssetTypeParameter = 'image' | 'attachment'

interface CreateArticleAssetOptionsBase {
  key: string
  articleId: string
  assetType: AssetTypeParameter
  fileName?: string
}

type CreateArticleAssetOptionWithFilepath = CreateArticleAssetOptionsBase & {
  filepath: string
}

type CreateArticleAssetOptionsWithStream = CreateArticleAssetOptionsBase & {
  stream: Stream
}

export type CreateArticleAssetOptions =
  | CreateArticleAssetOptionWithFilepath
  | CreateArticleAssetOptionsWithStream

export async function createArticleAsset(apiToken: string, options: CreateArticleAssetOptions) {
  const form = new FormData()
  form.append('key', apiToken)
  form.append('articleId', options.articleId)
  form.append('assetType', options.assetType)
  if ('filepath' in options) {
    form.append('file', fs.createReadStream(options.filepath), basename(options.filepath))
  } else if ('stream' in options) {
    form.append('file', options.stream)
  }

  if (options.fileName) {
    form.append('fileName', options.fileName)
  }

  const response = await post<CreateArticleAssetResponse>(apiToken, `/assets/article`, {
    body: form,
    headers: form.getHeaders()
  })

  return response.body
}
