import { BaseError } from '../base-error';

export class ForbiddenActionError extends BaseError {
    public constructor(message: string = 'The Action performed is forbidden. 😕') {
        super(message);

        this.name = 'ForbiddenActionError';
    }
}
