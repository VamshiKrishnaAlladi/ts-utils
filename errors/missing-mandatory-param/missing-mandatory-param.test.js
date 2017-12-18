describe('Module ts-utils/errors/missing-mandatory-param:', function () {
    test('should export a Class MissingMandatoryParamError', function () {
        var MissingMandatoryParamError = require('./missing-mandatory-param').MissingMandatoryParamError;
        expect(MissingMandatoryParamError).toBeInstanceOf(Function);
    });
    describe('Exported class MissingMandtaoryParamError:', function () {
        test('should be a subclass of Error class', function () {
            var MissingMandatoryParamError = require('./missing-mandatory-param').MissingMandatoryParamError;
            expect(MissingMandatoryParamError.prototype).toBeInstanceOf(Error);
        });
    });
});
