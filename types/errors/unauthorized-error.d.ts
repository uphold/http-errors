import { HttpError } from './http-error';
export declare class UnauthorizedError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
