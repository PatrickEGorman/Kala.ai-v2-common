import {Subjects} from '../subjects';
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface MaterialDeletedEvent {
    subject: Subjects.MaterialDeleted;
    data: MaterialDBAttrs
}