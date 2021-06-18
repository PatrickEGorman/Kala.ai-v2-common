import {Subjects} from "../subjects";
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface MachineCreatedEvent {
    subject: Subjects.MachineCreated;
    data: MachineDBAttrs
}