import { BaseError } from './../base-error';
export declare class MissingMandatoryParamError extends BaseError {
    constructor(paramName: string);
}
