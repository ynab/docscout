"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = exports.listAllCategories = exports.listCategories = void 0;
const request_1 = require("./request");
async function listCategories(apiToken, collectionId, options) {
    const path = `collections/${collectionId}/categories`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.listCategories = listCategories;
async function listAllCategories(apiToken, collectionId, options) {
    const categories = [];
    const baseOptions = Object.assign({}, options);
    let currentPage = 1;
    let totalPages = 1;
    while (currentPage <= totalPages) {
        const currentOptions = Object.assign({}, baseOptions, { page: currentPage });
        const categoriesList = await listCategories(apiToken, collectionId, currentOptions);
        categories.splice(-1, 0, ...categoriesList.categories.items);
        totalPages = categoriesList.categories.pages;
        currentPage += 1;
    }
    return categories;
}
exports.listAllCategories = listAllCategories;
async function getCategory(apiToken, categoryIdOrNumber) {
    const path = `categories/${categoryIdOrNumber}`;
    const response = await request_1.get(apiToken, path);
    return response.body;
}
exports.getCategory = getCategory;
