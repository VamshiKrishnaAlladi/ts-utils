describe('Module ts-utils/errors/missing-mandatory-param:', () => {
    test('should export a Class MissingMandatoryParamError', () => {
        const { MissingMandatoryParamError } = require('./missing-mandatory-param');

        expect(MissingMandatoryParamError).toBeInstanceOf(Function);
    });
    
    describe('Exported class MissingMandtaoryParamError:', () => {
        test('should be a subclass of BaseError class', () => {
            const { MissingMandatoryParamError } = require('./missing-mandatory-param');
            const { BaseError } = require('./../base-error');

            expect(MissingMandatoryParamError.prototype).toBeInstanceOf(BaseError);
        });
    });
});
