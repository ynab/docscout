"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var articles = __importStar(require("./articles"));
var assets = __importStar(require("./assets"));
var collections = __importStar(require("./collections"));
var Client = /** @class */ (function () {
    function Client(apiToken) {
        this.apiToken = apiToken;
    }
    Client.prototype.createArticleAsset = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var asset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, assets.createArticleAsset(this.apiToken, options)];
                    case 1:
                        asset = _a.sent();
                        return [2 /*return*/, asset];
                }
            });
        });
    };
    Client.prototype.getArticle = function (articleIdOrNumber, options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.getArticle(this.apiToken, articleIdOrNumber, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.article];
                }
            });
        });
    };
    Client.prototype.getCollection = function (collectionIdOrNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, collections.getCollection(this.apiToken, collectionIdOrNumber)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.collection];
                }
            });
        });
    };
    Client.prototype.getRevision = function (revisionId) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.getRevision(this.apiToken, revisionId)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.revision];
                }
            });
        });
    };
    Client.prototype.listArticlesInCategory = function (categoryId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.listArticlesInCategory(this.apiToken, categoryId, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.articles];
                }
            });
        });
    };
    Client.prototype.listArticlesInCollection = function (collectionId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.listArticlesInCollection(this.apiToken, collectionId, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.articles];
                }
            });
        });
    };
    Client.prototype.listCollections = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, collections.listCollections(this.apiToken, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.collections];
                }
            });
        });
    };
    Client.prototype.listRelatedArticles = function (articleId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.listRelatedArticles(this.apiToken, articleId, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.articles];
                }
            });
        });
    };
    Client.prototype.listRevisions = function (articleId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.listRevisions(this.apiToken, articleId, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/, envelope.revisions];
                }
            });
        });
    };
    Client.prototype.searchArticles = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var envelope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles.searchArticles(this.apiToken, options)];
                    case 1:
                        envelope = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
