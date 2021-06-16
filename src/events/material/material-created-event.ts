import {Subjects} from "../subjects";
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface MaterialCreatedEvent {
    subject: Subjects.MaterialCreated;
    data: MaterialDBAttrs
}