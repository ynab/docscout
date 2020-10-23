"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRevision = exports.getArticle = exports.listRevisions = exports.listRelatedArticles = exports.searchArticles = exports.listArticlesInCategory = exports.listArticlesInCollection = void 0;
const request_1 = require("./request");
async function listArticlesInCollection(apiToken, collectionId, options) {
    const path = `collections/${collectionId}/articles`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.listArticlesInCollection = listArticlesInCollection;
async function listArticlesInCategory(apiToken, categoryId, options) {
    const path = `categories/${categoryId}/articles`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.listArticlesInCategory = listArticlesInCategory;
async function searchArticles(apiToken, options) {
    const path = 'search/articles';
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.searchArticles = searchArticles;
async function listRelatedArticles(apiToken, articleId, options) {
    const path = `articles/${articleId}/related`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.listRelatedArticles = listRelatedArticles;
async function listRevisions(apiToken, articleId, options) {
    const path = `articles/${articleId}/revisions`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.listRevisions = listRevisions;
async function getArticle(apiToken, articleIdOrNumber, options) {
    const path = `articles/${articleIdOrNumber}`;
    const response = await request_1.get(apiToken, path, options);
    return response.body;
}
exports.getArticle = getArticle;
async function getRevision(apiToken, revisionId) {
    const path = `revisions/${revisionId}`;
    const response = await request_1.get(apiToken, path);
    return response.body;
}
exports.getRevision = getRevision;
