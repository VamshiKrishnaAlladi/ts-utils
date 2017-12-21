describe('Module ts-utils/errors:', function () {
    test('should export BaseError Class', function () {
        var errors = require('./errors');
        expect(errors).toHaveProperty('BaseError');
    });
    test('should export MissingMandatoryParamError Class', function () {
        var errors = require('./errors');
        expect(errors).toHaveProperty('MissingMandatoryParamError');
    });
});
