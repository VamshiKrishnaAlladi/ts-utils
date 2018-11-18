import { isArray, isObject, isFunction } from '../predicates';

export function clone(input: any): any {
    if (isArray(input)) {
        return input.map(clone);
    }

    if (isObject(input) && !isFunction(input)) {
        return Object
            .keys(input)
            .reduce((map, key) => (map[key] = clone(input[key]), map), {});
    }

    return input;
}
