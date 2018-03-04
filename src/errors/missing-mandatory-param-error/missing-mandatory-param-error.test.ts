describe('Module ts-utils/errors/missing-mandatory-param:', () => {
    test('should export a Class MissingMandatoryParamError', () => {
        const { MissingMandatoryParamError } = require('.');

        expect(MissingMandatoryParamError).toBeInstanceOf(Function);
    });

    describe('Exported class MissingMandtaoryParamError:', () => {
        test('should be a subclass of BaseError class', () => {
            const { MissingMandatoryParamError } = require('.');
            const { BaseError } = require('./../base-error');

            expect(MissingMandatoryParamError.prototype).toBeInstanceOf(BaseError);
        });

        test('should have an instance property "missingParam"', () => {
            const { MissingMandatoryParamError } = require('.');
            const fakeParamName = 'SomeParam';
            const errorInstance = new MissingMandatoryParamError(fakeParamName);

            expect(errorInstance).toHaveProperty('missingParam');
            expect(errorInstance.missingParam).toBe(fakeParamName);
        });
    });
});
