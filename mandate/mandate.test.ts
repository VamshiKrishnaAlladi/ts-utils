import { MissingMandatoryParamError } from './../errors/missing-mandatory-param';

describe('Module ts-utils/mandate:', () => {
    test('should export a function "mandate"', () => {
        const { mandate } = require('./mandate');

        expect(mandate).toBeInstanceOf(Function);
    });

    describe('Exported function "mandate":', () => {
        test('should throw a MissingMandatoryParamError when called', () => {
            const { mandate } = require('./mandate');

            expect(mandate).toThrowError(MissingMandatoryParamError);
        });
    });
});
