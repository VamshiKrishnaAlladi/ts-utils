import { MissingMandatoryParamError } from './../errors';

export function mandate(paramName: string): any {
    throw new MissingMandatoryParamError(paramName);
}
