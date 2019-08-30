/// <reference types="node" />
import * as http from 'http';
import { Readable } from 'stream';
interface GotOptions {
    url?: string | http.RequestOptions;
    options?: http.RequestOptions;
    baseUrl?: string;
    headers?: http.OutgoingHttpHeaders;
    stream?: boolean;
    body?: string | Buffer | Readable | FormData | object;
    cookieJar?: any;
    encoding?: string | null;
    form?: boolean;
    json?: boolean;
    query?: string | Record<string, any> | URLSearchParams;
    timeout?: number | any;
    retry?: number | any;
    followRedirect?: boolean;
    decompress?: boolean;
    cache?: Cache;
    useElectronNet?: boolean;
    throwHttpErrors?: boolean;
    agent?: http.Agent | boolean;
    hooks?: Record<string, Function[]>;
}
interface Response<T> {
    request: GotOptions;
    body: T;
    url: string;
    requestUrl: string;
    timings: object;
    fromCache: boolean;
    redirectUrls: string[];
    retryCount: number;
}
export declare function get<T>(apiToken: string, path: string, params?: any): Promise<Response<T>>;
export declare function post<T>(apiToken: string, path: string, body?: any): Promise<Response<T>>;
export {};
