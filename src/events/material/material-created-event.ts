import {Subjects} from "../subjects";
import {material_fields} from "../../object_fields/material_fields";

export interface MaterialCreatedEvent {
    subject: Subjects.MaterialCreated;
    data: material_fields
}