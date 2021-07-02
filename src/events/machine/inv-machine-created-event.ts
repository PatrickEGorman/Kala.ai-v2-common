import {Subjects} from "../subjects";
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface InvMachineCreatedEvent {
    subject: Subjects.InvMachineCreated;
    data: {
        id: string,
        machineId: string,
        factoryId: string
    }
}