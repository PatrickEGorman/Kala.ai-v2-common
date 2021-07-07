import {Subjects} from '../subjects';

export interface StepUpdatedEvent {
    subject: Subjects.StepUpdated;
    data: {
        id: string,
        quantity?: number,
        stepTime: number
    }
}