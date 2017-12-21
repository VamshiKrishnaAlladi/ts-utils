describe('Module ts-utils/errors/base-error:', function () {
    test('should export a Class BaseError', function () {
        var BaseError = require('./base-error').BaseError;
        expect(BaseError).toBeInstanceOf(Function);
    });
    describe('Exported class BaseError:', function () {
        test('should be a subclass of Error class', function () {
            var BaseError = require('./base-error').BaseError;
            expect(BaseError.prototype).toBeInstanceOf(Error);
        });
        test('should be a throwable', function () {
            var BaseError = require('./base-error').BaseError;
            var testErrorMessage = 'This is no error!!?';
            try {
                throw new BaseError(testErrorMessage);
            }
            catch (error) {
                expect(error).toBeInstanceOf(BaseError);
                expect(error.message).toBe(testErrorMessage);
            }
        });
    });
});
