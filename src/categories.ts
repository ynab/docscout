import { OrderParameter, ListCategoriesResponse, GetCategoryResponse, Category } from './types/helpscout-docs'
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
  const path = `collections/${collectionId}/categories`
  const response = await get<ListCategoriesResponse>(apiToken, path, options)
  return response.body
}

interface ListAllCategoriesOptions {
  sort?: CategoriesSortParameter
  order?: OrderParameter
}

async function listAllCategories(apiToken: string, collectionId: string, options?: ListAllCategoriesOptions) {
  const categories: Category[] = []
  const baseOptions = Object.assign({}, options)

  let currentPage = 1
  let totalPages = 1
  while (currentPage <= totalPages) {
    const currentOptions = Object.assign({}, baseOptions, { page: currentPage })
    const categoriesList = await listCategories(apiToken, collectionId, currentOptions)
    categories.splice(-1, 0, ...categoriesList.categories.items)
    totalPages = categoriesList.categories.pages
    currentPage += 1
  }

  return categories
}

export async function getCategory(apiToken: string, categoryIdOrNumber: string | number) {
  const path = `categories/${categoryIdOrNumber}`
  const response = await get<GetCategoryResponse>(apiToken, path)
  return response.body
}
