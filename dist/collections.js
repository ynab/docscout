"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.listAllCollections = exports.listCollections = void 0;
const request_1 = require("./request");
async function listCollections(apiToken, options) {
    const response = await request_1.get(apiToken, 'collections', options);
    return response.body;
}
exports.listCollections = listCollections;
async function listAllCollections(apiToken, options) {
    const collections = [];
    const baseOptions = Object.assign({}, options);
    let currentPage = 1;
    let totalPages = 1;
    while (currentPage <= totalPages) {
        const currentOptions = Object.assign({}, baseOptions, { page: currentPage });
        const result = await listCollections(apiToken, currentOptions);
        collections.splice(-1, 0, ...result.collections.items);
        totalPages = result.collections.pages;
        currentPage += 1;
    }
    return collections;
}
exports.listAllCollections = listAllCollections;
async function getCollection(apiToken, collectionIdOrNumber) {
    const response = await request_1.get(apiToken, `collections/${collectionIdOrNumber}`);
    return response.body;
}
exports.getCollection = getCollection;
