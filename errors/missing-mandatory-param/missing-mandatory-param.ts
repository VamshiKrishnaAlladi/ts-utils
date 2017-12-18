export class MissingMandatoryParamError extends Error {
    // tslint:disable-next-line:variable-name
    __proto__: Error;

    public constructor(paramName: string) {
        super();

        this.name = 'MissingMandatoryParamError';
        this.message = `It is mandtory to pass the parameter "${paramName}"`;

        // The next statement is used to fix an issue with TypeScript.
        // Reference: https://github.com/Microsoft/TypeScript/issues/13965
        this.__proto__ = new.target.prototype;
    }
}
