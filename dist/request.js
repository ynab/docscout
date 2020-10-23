"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
const got_1 = __importDefault(require("got"));
const merge_1 = __importDefault(require("lodash/merge"));
const url_1 = require("url");
function requestOptions(apiToken, options) {
    const authorizationToken = Buffer.from(`${apiToken}:X`).toString('base64');
    return merge_1.default({
        prefixUrl: 'https://docsapi.helpscout.net/v1/',
        headers: {
            Authorization: `Basic ${authorizationToken}`,
        },
        responseType: 'json',
    }, options);
}
async function get(apiToken, path, params) {
    const searchParams = new url_1.URLSearchParams(params);
    const options = requestOptions(apiToken, { searchParams });
    const response = await got_1.default.get(path, options);
    return response;
}
exports.get = get;
async function post(apiToken, path, body) {
    const options = requestOptions(apiToken, { body });
    const response = await got_1.default.post(path, options);
    return response;
}
exports.post = post;
