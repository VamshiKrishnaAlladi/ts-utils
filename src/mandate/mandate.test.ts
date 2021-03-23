import { MissingMandatoryParamError } from '../errors/missing-mandatory-param-error';
import { mandate } from '.';

describe('Module ts-utils/mandate:', () => {
    test('should export a function "mandate"', () => {
        expect(mandate).toBeInstanceOf(Function);
    });

    describe('Exported function "mandate":', () => {
        test('should throw a MissingMandatoryParamError when called', () => {
            expect(mandate).toThrowError(MissingMandatoryParamError);
        });

        test('should specify the paramName passed in the MissingMandatoryParamError thrown', () => {
            expect(() => mandate('someParam')).toThrowError(/.*"someParam"/);
        });
    });
});
