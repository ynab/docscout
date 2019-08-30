/// <reference types="node" />
import { Stream } from 'stream';
declare type AssetTypeParameter = 'image' | 'attachment';
interface CreateArticleAssetOptionsBase {
    key: string;
    articleId: string;
    assetType: AssetTypeParameter;
    fileName?: string;
}
declare type CreateArticleAssetOptionWithFilepath = CreateArticleAssetOptionsBase & {
    filepath: string;
};
declare type CreateArticleAssetOptionsWithStream = CreateArticleAssetOptionsBase & {
    stream: Stream;
};
export declare type CreateArticleAssetOptions = CreateArticleAssetOptionWithFilepath | CreateArticleAssetOptionsWithStream;
export declare function createArticleAsset(apiToken: string, options: CreateArticleAssetOptions): Promise<import("./types/helpscout-docs").CreateAssetReponse>;
export {};
