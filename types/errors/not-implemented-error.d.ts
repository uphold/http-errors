import { HttpError } from './http-error';
export declare class NotImplementedError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
