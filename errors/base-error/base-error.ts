export class BaseError extends Error {
    // tslint:disable-next-line:variable-name
    __proto__: Error;

    public constructor(message: string) {
        super(message);

        this.name = 'BaseError';

        // The next statement is used to fix an issue with TypeScript.
        // Reference: https://github.com/Microsoft/TypeScript/issues/13965
        this.__proto__ = new.target.prototype;
    }
}
