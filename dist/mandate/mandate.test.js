"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var missing_mandatory_param_1 = require("./../errors/missing-mandatory-param");
describe('Module ts-utils/mandate:', function () {
    test('should export a function "mandate"', function () {
        var mandate = require('./mandate').mandate;
        expect(mandate).toBeInstanceOf(Function);
    });
    describe('Exported function "mandate":', function () {
        test('should throw a MissingMandatoryParamError when called', function () {
            var mandate = require('./mandate').mandate;
            expect(mandate).toThrowError(missing_mandatory_param_1.MissingMandatoryParamError);
        });
    });
});
