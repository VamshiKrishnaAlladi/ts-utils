export class MissingMandatoryParamError extends Error {
    public constructor(paramName: string) {
        super();

        this.name = 'MissingMandatoryParamError';
        this.message = `It is mandtory to pass the parameter ${paramName}`;
    }
}
