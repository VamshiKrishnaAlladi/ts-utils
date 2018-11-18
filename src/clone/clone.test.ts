import { clone } from '.';

const isEquivalent = (obj1, obj2) => {
    expect(obj1).not.toBe(obj2);
    expect(obj1).toEqual(obj2);
};

describe('Module ts-utils/clone', () => {
    test('should export a function "clone"', () => {
        expect(clone).toBeInstanceOf(Function);
        expect(clone.name).toBe('clone');
    });

    test('should return a copy equivalent to the input', () => {
        const obj = { a:123 };
        const copy = clone(obj);

        isEquivalent(obj, copy);
    });

    test('should be able to clone objects with all types of values', () => {
        const obj = {
            num: 1,
            str: '',
            bool: true,
            fn: () => 'hello!',
        };
        const copy = clone(obj);

        isEquivalent(obj, copy);
    });

    test('should be able to clone arrays', () => {
        const array = [1, '', true, () => 'hello'];
        const copy = clone(array);

        isEquivalent(array, copy);
    });

    test('should be able to clone deep objects', () => {
        const deepObject = {
            level1: {
                level2: {
                    level3: true,
                },
            },
        };
        const copy = clone(deepObject);

        isEquivalent(deepObject, copy);
    });

    test('should be able to clone multi level array', () => {
        const multiLevelArray = ['level 1', ['level 2', ['level 3']]];

        const copy = clone(multiLevelArray);

        isEquivalent(multiLevelArray, copy);
    });
});
