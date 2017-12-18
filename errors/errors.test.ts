describe('Module ts-utils/errors:', () => {
    test('should export an object with MissingMandatoryParamError', () => {
        const errors = require('./errors');

        expect(errors).toHaveProperty('MissingMandatoryParamError');
    });
});
