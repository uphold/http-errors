import { HttpError } from './http-error';
export declare class ValidationFailedError extends HttpError {
    errors?: object;

    constructor(errors?: object);
}
