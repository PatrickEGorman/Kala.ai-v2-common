import {Subjects} from '../subjects';
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface InvMaterialDeletedEvent {
    subject: Subjects.MaterialDeleted;
    data: {
        id: string
    }
}