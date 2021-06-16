import {Subjects} from '../subjects';
import {material_fields} from "../../object_fields/material_fields";

export interface MaterialDeletedEvent {
    subject: Subjects.MaterialDeleted;
    data: material_fields
}