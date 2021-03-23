import { isArray, isObject, isFunction } from '../predicates';

export function clone(input: any): any {
    if (isArray(input)) {
        return input.map(clone);
    }

    if (isObject(input) && !isFunction(input)) {
        return Object
            .keys(input)
            .reduce((map, key) => {
                // eslint-disable-next-line no-param-reassign
                map[key] = clone(input[key]);
                return map;
            }, {});
    }

    return input;
}
