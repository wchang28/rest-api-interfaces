export interface ConnectOptions {
    instance_url?: string;
    rejectUnauthorized?: boolean;
}

export interface ApiCallOptions {
	headers?: {[field:string]:string;};
    rejectUnauthorized?: boolean;
}