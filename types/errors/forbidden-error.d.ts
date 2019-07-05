import { HttpError } from './http-error';
export declare class ForbiddenError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
