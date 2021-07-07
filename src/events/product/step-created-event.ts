import {Subjects} from "../subjects";
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface StepCreatedEvent {
    subject: Subjects.StepCreated;
    data: {
        id: string,
        machineId?: string,
        materialId?: string,
        quantity?: number,
        stepTime: number
    }
}