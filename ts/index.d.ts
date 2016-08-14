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
    (err: any, ret: any) : void;
}