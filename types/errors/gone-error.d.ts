import { HttpError } from './http-error';
export declare class GoneError extends HttpError {
    constructor(message?: string, props?: object);
    constructor(props?: object);
}
