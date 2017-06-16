export type HTTPHeaders = {[fld:string]: string};

export interface ConnectOptions {
    instance_url?: string;
    rejectUnauthorized?: boolean;
}

export interface ApiCallOptions {
    headers?: HTTPHeaders;
    rejectUnauthorized?: boolean;
}

export interface IError {
    error: string;
    error_description: string;
}

export interface CompletionHandler {
    (err: any, ret: any, headers?: HTTPHeaders) : void;
}

export type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT";

export interface ContentInfo {
    readonly type: string;   // content-type
    readonly size: number;   // content-length
}

export interface RESTReturn {
    status: number
    statusText: string;
    headers: HTTPHeaders;
    data?: any
}