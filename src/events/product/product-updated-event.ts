import {Subjects} from '../subjects';

export interface ProductUpdatedEvent {
    subject: Subjects.ProductUpdated;
    data: {
        id: string,
        value: number
    }
}