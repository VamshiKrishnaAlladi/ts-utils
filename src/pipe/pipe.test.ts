import { pipe } from './pipe';

describe('Moudle ts-utils/pipe', () => {
    test('should export a function "pipe"', () => {
        const { pipe } = require('./pipe');

        expect(pipe).toBeInstanceOf(Function);
    });

    describe('"pipe" function', () => {
        test('should run passed functions in given order', () => {
            const add10 = x => x + 10;
            const half = x => x / 2;
            const minus20 = x => x - 20;

            const result = pipe(add10, half, minus20)(200);

            expect(result).toBe(85); // 200 -> add10 => 210 -> half => 105 -> minus20 => 85
        });

        test('should return the output of the last function as the overall output', () => {
            const result = pipe(() => 1, () => 2, () => 3)(0);

            expect(result).toBe(3);
        });
    });

});
