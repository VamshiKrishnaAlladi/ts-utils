import { MissingMandatoryParamError } from '../errors/missing-mandatory-param-error';
import { tryCatch } from '.';

function getATestPromise(shouldResolve:boolean = true, resolutionData = 'someData', rejectionData = new Error('someError')) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => (shouldResolve ? resolve(resolutionData) : reject(rejectionData)),
            50,
        );
    });
}

describe('Module ts-utils/try-catch:', () => {
    test('should export a function "tryCatch"', () => {
        expect(tryCatch).toBeInstanceOf(Function);
    });

    describe('Exported function "tryCatch":', () => {
        test('should throw a MissingMandatoryParamError when called without a "promise"', async () => {
            expect.assertions(2);
            try {
                await tryCatch();
            } catch (error) {
                expect(error).toBeInstanceOf(MissingMandatoryParamError);
                expect(error.missingParam).toBe('promise');
            }
        });

        test('should return a promise of an array with two values [data,error] resp', async () => {
            const results = await tryCatch(getATestPromise());

            expect(results).toBeInstanceOf(Array);
            expect(results.length).toBe(2);
        });

        test('should return the resolved value as the 1st value in the response array', async () => {
            const valueToResolveWith = 'SomeTestData';
            const [value, error] = await tryCatch(getATestPromise(true, valueToResolveWith));

            expect(value).toBe(valueToResolveWith);
            expect(error).toBe(null);
        });

        test('should return the rejected value as the 2nd value in the response array', async () => {
            const errorToRejectWith = new Error('SomeErrorData');
            const [value, error] = await tryCatch(getATestPromise(false, null, errorToRejectWith));

            expect(value).toBe(null);
            expect(error).toBe(errorToRejectWith);
        });
    });
});
