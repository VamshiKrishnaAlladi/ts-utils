export function isObject(input) {
    return input instanceof Object;
}

export function isArray(input: any) {
    return Array.isArray(input);
}

export function isFunction(input: any) {
    return typeof input === 'function';
}
