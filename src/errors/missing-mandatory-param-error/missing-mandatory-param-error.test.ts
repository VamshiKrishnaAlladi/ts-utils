import { BaseError } from './../base-error';
import { MissingMandatoryParamError } from '.';

describe('Module ts-utils/errors/missing-mandatory-param:', () => {
    test('should export a Class MissingMandatoryParamError', () => {
        expect(MissingMandatoryParamError).toBeInstanceOf(Function);
    });

    describe('Exported class MissingMandtaoryParamError:', () => {
        test('should be a subclass of BaseError class', () => {
            expect(MissingMandatoryParamError.prototype).toBeInstanceOf(BaseError);
        });

        test('should have an instance property "missingParam"', () => {
            const fakeParamName = 'SomeParam';
            const errorInstance = new MissingMandatoryParamError(fakeParamName);

            expect(errorInstance).toHaveProperty('missingParam');
            expect(errorInstance.missingParam).toBe(fakeParamName);
        });
    });
});
