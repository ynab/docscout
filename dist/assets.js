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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArticleAsset = void 0;
const form_data_1 = __importDefault(require("form-data"));
const fs = __importStar(require("fs"));
const path_1 = require("path");
const request_1 = require("./request");
async function createArticleAsset(apiToken, options) {
    const form = new form_data_1.default();
    form.append('key', apiToken);
    form.append('articleId', options.articleId);
    form.append('assetType', options.assetType);
    if ('filepath' in options) {
        form.append('file', fs.createReadStream(options.filepath), path_1.basename(options.filepath));
    }
    else if ('stream' in options) {
        form.append('file', options.stream);
    }
    if (options.fileName) {
        form.append('fileName', options.fileName);
    }
    const response = await request_1.post(apiToken, `assets/article`, {
        body: form,
        headers: form.getHeaders(),
    });
    return response.body;
}
exports.createArticleAsset = createArticleAsset;
