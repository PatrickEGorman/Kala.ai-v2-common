import {Subjects} from '../subjects';
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface InvMaterialUpdatedEvent {
    subject: Subjects.MaterialUpdated;
    data: {
        id: string,
        quantity: number,
        factoryId: string
    }
}