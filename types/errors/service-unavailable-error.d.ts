import { HttpError } from './http-error';
export declare class ServiceUnavailableError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
