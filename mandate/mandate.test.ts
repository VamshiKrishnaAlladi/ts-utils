describe('Module mandate:', () => {
    test('should export a function', () => {
        const { mandate } = require('./mandate');

        expect(mandate).toBeInstanceOf(Function);
    });
});
