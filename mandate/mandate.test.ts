describe('Module ts-utils/mandate:', () => {
    test('should export a function "mandate"', () => {
        const { mandate } = require('./mandate');

        expect(mandate).toBeInstanceOf(Function);
    });
});
