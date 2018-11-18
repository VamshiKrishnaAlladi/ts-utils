import { isObject, isArray, isFunction } from '.';

describe('Module ts-utils/predicates', () => {
    test('should export a predicate function "isObject"', () => {
        expect(isObject).toBeInstanceOf(Function);
        expect(isObject.name).toBe('isObject');
    });

    describe('Predicate function "isObject', () => {
        test('should return true when the input is an object', () => {
            expect(isObject({})).toBe(true);
            expect(isObject([])).toBe(true);
            expect(isObject(new Date())).toBe(true);
        });

        test('should return false when the input is a primitive value', () => {
            expect(isObject('')).toBe(false);
            expect(isObject(123)).toBe(false);
            expect(isObject(true)).toBe(false);
            expect(isObject(null)).toBe(false);
            expect(isObject(undefined)).toBe(false);
        });
    });

    test('should export a predicate function "isArray"', () => {
        expect(isArray).toBeInstanceOf(Function);
        expect(isArray.name).toBe('isArray');
    });

    describe('Predicate function "isArray', () => {
        test('should return true when the input is an array', () => {
            expect(isArray([])).toBe(true);
            expect(isArray(Array.of(1, 2, 3))).toBe(true);
            expect(isArray(Array.from('hello'))).toBe(true);
        });

        test('should return false when the input is anything other than an Array', () => {
            expect(isArray('')).toBe(false);
            expect(isArray(123)).toBe(false);
            expect(isArray(true)).toBe(false);
            expect(isArray(null)).toBe(false);
            expect(isArray(undefined)).toBe(false);
            expect(isArray({})).toBe(false);
            expect(isArray(() => {})).toBe(false);
        });
    });

    test('should export a predicate function "isFunction"', () => {
        expect(isFunction).toBeInstanceOf(Function);
        expect(isFunction.name).toBe('isFunction');
    });

    describe('Predicate function "isFunction', () => {
        test('should return true when the input is a function', () => {
            function namedFn() {}
            const arrowFn = () => {};
            function* generatorFn() {}

            expect(isFunction(namedFn)).toBe(true);
            expect(isFunction(arrowFn)).toBe(true);
            expect(isFunction(generatorFn)).toBe(true);
        });

        test('should return false when the input is anything other than a function', () => {
            expect(isFunction('')).toBe(false);
            expect(isFunction(123)).toBe(false);
            expect(isFunction(true)).toBe(false);
            expect(isFunction(null)).toBe(false);
            expect(isFunction(undefined)).toBe(false);
            expect(isFunction({})).toBe(false);
            expect(isFunction([])).toBe(false);
        });
    });
});
