import { mandate } from './../mandate';

export function tryCatch<T, U>(promise: Promise<T> = mandate('promise')): Promise<[T|null, U|null]> {
    return promise
    .then<[T, null]>((data: T) => [data, null])
    .catch<[null, U]>((error: U) => [null, error]);
}
