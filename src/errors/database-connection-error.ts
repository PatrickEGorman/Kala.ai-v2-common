import {CustomError} from "./CustomError";

export class DatabaseConnectionError extends CustomError {
    reason = "Database error"
    statusCode = 500

    constructor() {
        super("database error");
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [
            {message: this.reason}
        ]
    }
}