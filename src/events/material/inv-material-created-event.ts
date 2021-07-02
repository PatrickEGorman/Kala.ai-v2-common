import {Subjects} from "../subjects";
import {MaterialDBAttrs} from "../../object_attrs/material-attrs";

export interface InvMaterialCreatedEvent {
    subject: Subjects.InvMaterialCreated;
    data: {
        id: string,
        quantity: number,
        materialId: string,
        factoryId: string
    }
}