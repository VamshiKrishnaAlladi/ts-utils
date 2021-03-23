export const pipe = (...fns: Function[]) => (input) => fns.reduce((acc, fn) => fn(acc), input);
