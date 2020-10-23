import { OrderParameter, ListCategoriesResponse, GetCategoryResponse, Category } from './types/helpscout-docs';
declare type CategoriesSortParameter = 'number' | 'order' | 'name' | 'articleCount' | 'createdAt' | 'updatedAt';
interface ListCategoriesOptions {
    page?: number;
    sort?: CategoriesSortParameter;
    order?: OrderParameter;
}
export declare function listCategories(apiToken: string, collectionId: string, options?: ListCategoriesOptions): Promise<ListCategoriesResponse>;
interface ListAllCategoriesOptions {
    sort?: CategoriesSortParameter;
    order?: OrderParameter;
}
export declare function listAllCategories(apiToken: string, collectionId: string, options?: ListAllCategoriesOptions): Promise<Category[]>;
export declare function getCategory(apiToken: string, categoryIdOrNumber: string | number): Promise<GetCategoryResponse>;
export {};
