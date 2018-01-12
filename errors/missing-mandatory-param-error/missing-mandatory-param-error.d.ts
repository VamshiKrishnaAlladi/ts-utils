import { BaseError } from './../base-error';
export declare class MissingMandatoryParamError extends BaseError {
    readonly missingParam: string;
    constructor(paramName: string);
}
