import { MissingMandatoryParamError } from '../errors/missing-mandatory-param-error';

export function mandate(paramName: string): any {
    throw new MissingMandatoryParamError(paramName);
}
