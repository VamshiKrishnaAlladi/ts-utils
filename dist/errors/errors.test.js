describe('Module ts-utils/errors:', function () {
    test('should export an object with MissingMandatoryParamError', function () {
        var errors = require('./errors');
        expect(errors).toHaveProperty('MissingMandatoryParamError');
    });
});
