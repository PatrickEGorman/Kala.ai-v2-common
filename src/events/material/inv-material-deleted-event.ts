import {Subjects} from '../subjects';

export interface InvMaterialDeletedEvent {
    subject: Subjects.InvMaterialDeleted;
    data: {
        id: string
    }
}