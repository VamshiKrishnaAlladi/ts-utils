describe('Module ts-utils/errors:', () => {
    test('should export BaseError Class', () => {
        const errors = require('./errors');

        expect(errors).toHaveProperty('BaseError');
    });

    test('should export MissingMandatoryParamError Class', () => {
        const errors = require('./errors');

        expect(errors).toHaveProperty('MissingMandatoryParamError');
    });
});
