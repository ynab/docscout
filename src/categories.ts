import { OrderParameter, ListCategoriesResponse, GetCategoryResponse } from './types/helpscout-docs'
import { get } from './request'

type CategoriesSortParameter = 'number' | 'order' | 'name' | 'articleCount' | 'createdAt' | 'updatedAt'

interface ListCategoriesOptions {
  page?: number
  sort?: CategoriesSortParameter
  order?: OrderParameter
}

export async function listCategories(
  apiToken: string,
  collectionId: string,
  options?: ListCategoriesOptions
) {
  const path = `/collections/${collectionId}/categories`
  const response = await get<ListCategoriesResponse>(apiToken, path, options)
  return response.body
}

export async function getCategory(apiToken: string, categoryIdOrNumber: string | number) {
  const path = `/categories/${categoryIdOrNumber}`
  const response = await get<GetCategoryResponse>(apiToken, path)
  return response.body
}
