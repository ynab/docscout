import * as FormData from 'form-data'
import * as fs from 'fs'
import { basename } from 'path'
import { post } from './request'
import { CreateArticleAssetResponse } from './types/helpscout-docs'

type AssetTypeParameter = 'image' | 'attachment'

interface CreateArticleAssetOption {
  key: string
  articleId: string
  assetType: AssetTypeParameter
  fileName?: string
}

export async function createArticleAsset(
  apiToken: string,
  sourceFilepath: string,
  options: CreateArticleAssetOption
) {
  const form = new FormData()
  form.append('key', this.apiToken)
  form.append('articleId', options.articleId)
  form.append('assetType', options.assetType)
  form.append('file', fs.createReadStream(sourceFilepath), basename(sourceFilepath))
  if (options.fileName) {
    form.append('fileName', options.fileName)
  }

  const response = await post<CreateArticleAssetResponse>(apiToken, this.url(`/assets/article`), {
    body: form,
    headers: form.getHeaders()
  })

  return response.body
}
