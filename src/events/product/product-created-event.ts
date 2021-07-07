import {Subjects} from "../subjects";

export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: {
        id: string,
        name: string,
        steps: string[],
        value: number
    }
}