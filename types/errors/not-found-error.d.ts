import { HttpError } from './http-error';
export declare class NotFoundError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
