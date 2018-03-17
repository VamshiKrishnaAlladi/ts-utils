import { BaseError } from '.';

describe('Module ts-utils/errors/base-error:', () => {
    test('should export a Class BaseError', () => {
        expect(BaseError).toBeInstanceOf(Function);
    });

    describe('Exported class BaseError:', () => {
        test('should be a subclass of Error class', () => {
            expect(BaseError.prototype).toBeInstanceOf(Error);
        });

        test('should be a throwable', () => {
            const testErrorMessage = 'This is no error!!?';

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
