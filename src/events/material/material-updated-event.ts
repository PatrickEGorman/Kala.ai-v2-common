import {Subjects} from '../subjects';
import material_fields from "../../object_fields/material_fields";

export interface MaterialUpdatedEvent {
    subject: Subjects.MaterialUpdated;
    data: material_fields
}