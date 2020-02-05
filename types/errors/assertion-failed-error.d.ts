import { HttpError } from './http-error';
export declare class AssertionFailedError extends HttpError {
    errors?: object;

    constructor(errors?: object);
}
