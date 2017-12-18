describe('Module TS Utils:', () => {
    test('should export an object', () => {
        const utils = require('./ts-utils');

        expect(utils).toBeInstanceOf(Object);
    });

    test('should expose the function "mandate"', () => {
        const utils = require('./ts-utils');

        expect(utils).toHaveProperty('mandate');
        expect(utils.mandate).toBeInstanceOf(Function);
    });
});
