import { OrderParameter, ListCategoriesResponse, GetCategoryResponse } from './types/helpscout-docs';
declare type CategoriesSortParameter = 'number' | 'order' | 'name' | 'articleCount' | 'createdAt' | 'updatedAt';
interface ListCategoriesOptions {
    page?: number;
    sort?: CategoriesSortParameter;
    order?: OrderParameter;
}
export declare function listCategories(apiToken: string, collectionId: string, options?: ListCategoriesOptions): Promise<ListCategoriesResponse>;
export declare function getCategory(apiToken: string, categoryIdOrNumber: string | number): Promise<GetCategoryResponse>;
export {};
