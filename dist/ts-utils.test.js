describe('Module TS Utils:', function () {
    test('should export an object', function () {
        var utils = require('./ts-utils');
        expect(utils).toBeInstanceOf(Object);
    });
    test('should expose the function "mandate"', function () {
        var utils = require('./ts-utils');
        expect(utils).toHaveProperty('mandate');
        expect(utils.mandate).toBeInstanceOf(Function);
    });
});
