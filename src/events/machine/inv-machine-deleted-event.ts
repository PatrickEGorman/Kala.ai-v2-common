import {Subjects} from '../subjects';
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface InvMachineDeletedEvent {
    subject: Subjects.InvMachineDeleted;
    data: {
        id: string
    }
}