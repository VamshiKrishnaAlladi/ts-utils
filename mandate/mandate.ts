import { MissingMandatoryParamError } from './../errors';

export function mandate(paramName: string) {
    throw new MissingMandatoryParamError(paramName);
}
