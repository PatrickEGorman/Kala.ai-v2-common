import {Subjects} from "../subjects";

export interface FactoryDeletedEvent {
    subject: Subjects.FactoryDeleted;
    data: {
        id: string;
        cost: number;
    }
}