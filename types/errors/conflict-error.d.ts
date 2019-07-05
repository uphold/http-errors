import { HttpError } from './http-error';
export declare class ConflictError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
