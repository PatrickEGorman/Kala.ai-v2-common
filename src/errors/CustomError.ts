export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(err: string) {
        super(err);

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}