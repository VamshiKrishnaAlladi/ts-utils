describe('Module mandate:', function () {
    test('should export a function', function () {
        var mandate = require('./mandate').mandate;
        expect(mandate).toBeInstanceOf(Function);
    });
});
