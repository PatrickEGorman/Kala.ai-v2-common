import {CustomError} from "./CustomError";

export class NotFoundError extends CustomError {
    statusCode = 404
    statement = '';

    constructor(object?: string) {
        super(`${object ? object : "Route"} not found`);
        Object.setPrototypeOf(this, NotFoundError.prototype)
        this.statement = object ? `${object} not found` : 'Not found';
    }

    serializeErrors() {
        return [{message: this.statement}];
    }
}