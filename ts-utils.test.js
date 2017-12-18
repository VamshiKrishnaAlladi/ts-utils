describe('Module TS Utils:', function () {
    test('should expose the function "mandate"', function () {
        var utils = require('./ts-utils');
        expect(utils).toHaveProperty('mandate');
        expect(utils.mandate).toBeInstanceOf(Function);
    });
});
