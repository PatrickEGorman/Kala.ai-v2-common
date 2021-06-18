import {Subjects} from '../subjects';
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface MachineUpdatedEvent {
    subject: Subjects.MachineUpdated;
    data: MachineDBAttrs
}