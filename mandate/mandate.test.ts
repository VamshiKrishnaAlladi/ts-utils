import { MissingMandatoryParamError } from './../errors';

describe('Module ts-utils/mandate:', () => {
    test('should export a function "mandate"', () => {
        const { mandate } = require('.');

        expect(mandate).toBeInstanceOf(Function);
    });

    describe('Exported function "mandate":', () => {
        test('should throw a MissingMandatoryParamError when called', () => {
            const { mandate } = require('.');

            expect(mandate).toThrowError(MissingMandatoryParamError);
        });

        test('should specify the paramName passed in the MissingMandatoryParamError thrown', () => {
            const { mandate } = require('.');

            expect(() => { mandate('someParam');}).toThrowError(/.*"someParam"/);
        });
    });
});
