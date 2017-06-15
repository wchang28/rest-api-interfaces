export interface ConnectOptions {
    instance_url?: string;
    rejectUnauthorized?: boolean;
}

export interface ApiCallOptions {
    headers?: {[fld:string]:string;};
    rejectUnauthorized?: boolean;
}

export interface IError {
    error: string;
    error_description: string;
}

export interface CompletionHandler {
    (err: any, ret: any, headers?: {[fld:string]:string;}) : void;
}

export type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT";

export interface RESTReturn {
    status: number
    statusText: string;
    headers: {[fld:string]: string};
    data?: any
}
