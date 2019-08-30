"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var articles = __importStar(require("./articles"));
exports.articles = articles;
var assets = __importStar(require("./assets"));
exports.assets = assets;
var categories = __importStar(require("./categories"));
exports.categories = categories;
var client_1 = require("./client");
var collections = __importStar(require("./collections"));
exports.collections = collections;
var sites = __importStar(require("./sites"));
exports.sites = sites;
exports.default = client_1.Client;