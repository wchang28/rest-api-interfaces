export interface ConnectOptions {
	instance_url?: string;
	rejectUnauthorized?: boolean;
}

export interface ApiCallOptions {
	headers?: {[fld:string]:string;};
    rejectUnauthorized?: boolean;
}