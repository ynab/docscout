"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSites = void 0;
const request_1 = require("./request");
async function listSites(apiToken, options) {
    const response = await request_1.get(apiToken, 'sites', options);
    return response.body;
}
exports.listSites = listSites;
