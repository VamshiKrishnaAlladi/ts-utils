describe('Module ts-utils/mandate:', function () {
    test('should export a function "mandate"', function () {
        var mandate = require('./mandate').mandate;
        expect(mandate).toBeInstanceOf(Function);
    });
});
