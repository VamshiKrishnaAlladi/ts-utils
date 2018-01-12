describe('Module ts-utils/errors/forbidden-action-error:', () => {
    test('should export a Class named "ForbiddenActionError"', () => {
        const { ForbiddenActionError } = require('.');

        expect(ForbiddenActionError).toBeInstanceOf(Function);
    });

    describe('Class ForbiddenActionError:', () => {
        test('should be a subclass of BaseError class', () => {
            const { ForbiddenActionError } = require('.');
            const { BaseError } = require('./../base-error');

            expect(ForbiddenActionError.prototype).toBeInstanceOf(BaseError);
        });

        test('should have the error message as the one passed while instantiating', () => {
            const { ForbiddenActionError } = require('.');
            const errorMsgToPassIn = 'This is some error message';

            const errorInstance = new ForbiddenActionError(errorMsgToPassIn);

            expect(errorInstance.message).toEqual(errorMsgToPassIn);
        });

        test('should have a default error message if none is passed while instantiating', () => {
            const { ForbiddenActionError } = require('.');

            const errorInstance = new ForbiddenActionError();

            expect(errorInstance.message).toBeTruthy();
        });
    });
});
