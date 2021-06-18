import {Subjects} from '../subjects';
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface MachineDeletedEvent {
    subject: Subjects.MachineDeleted;
    data: MachineDBAttrs
}