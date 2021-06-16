import {Subjects} from '../subjects';
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface MaterialUpdatedEvent {
    subject: Subjects.MaterialUpdated;
    data: MaterialDBAttrs
}