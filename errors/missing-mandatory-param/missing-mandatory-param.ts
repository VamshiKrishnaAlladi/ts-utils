import { BaseError } from './../base-error';

export class MissingMandatoryParamError extends BaseError {
    public constructor(paramName: string) {
        super(`It is mandatory to pass the parameter: "${paramName}"`);

        this.name = 'MissingMandatoryParamError';
    }
}
