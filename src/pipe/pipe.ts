export const pipe = (...fns: Function[]) => input => fns.reduce((input, fn) => fn(input), input);
