import { HttpError } from './http-error';
export declare class TooManyRequestsError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
