import {Subjects} from '../subjects';

export interface InvMaterialUpdatedEvent {
    subject: Subjects.InvMaterialUpdated;
    data: {
        id: string,
        quantity: number,
        factoryId: string
    }
}