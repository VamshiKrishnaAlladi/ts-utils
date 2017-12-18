describe('Module TS Utils:', () => {
    test('should expose the function "mandate"', () => {
        const utils = require('./ts-utils');

        expect(utils).toHaveProperty('mandate');
        expect(utils.mandate).toBeInstanceOf(Function);
    });
});
