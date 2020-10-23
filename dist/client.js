"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const articles = __importStar(require("./articles"));
const assets = __importStar(require("./assets"));
const collections = __importStar(require("./collections"));
class Client {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }
    async createArticleAsset(options) {
        const asset = await assets.createArticleAsset(this.apiToken, options);
        return asset;
    }
    async getArticle(articleIdOrNumber, options) {
        const envelope = await articles.getArticle(this.apiToken, articleIdOrNumber, options);
        return envelope.article;
    }
    async getCollection(collectionIdOrNumber) {
        const envelope = await collections.getCollection(this.apiToken, collectionIdOrNumber);
        return envelope.collection;
    }
    async getRevision(revisionId) {
        const envelope = await articles.getRevision(this.apiToken, revisionId);
        return envelope.revision;
    }
    async listArticlesInCategory(categoryId, options) {
        const envelope = await articles.listArticlesInCategory(this.apiToken, categoryId, options);
        return envelope.articles;
    }
    async listArticlesInCollection(collectionId, options) {
        const envelope = await articles.listArticlesInCollection(this.apiToken, collectionId, options);
        return envelope.articles;
    }
    async listCollections(options) {
        const envelope = await collections.listCollections(this.apiToken, options);
        return envelope.collections;
    }
    async listRelatedArticles(articleId, options) {
        const envelope = await articles.listRelatedArticles(this.apiToken, articleId, options);
        return envelope.articles;
    }
    async listRevisions(articleId, options) {
        const envelope = await articles.listRevisions(this.apiToken, articleId, options);
        return envelope.revisions;
    }
    async searchArticles(options) {
        const envelope = await articles.searchArticles(this.apiToken, options);
        return envelope.articles;
    }
}
exports.Client = Client;
