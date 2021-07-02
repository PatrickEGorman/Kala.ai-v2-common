import {Subjects} from '../subjects';
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface InvMachineUpdatedEvent {
    subject: Subjects.InvMachineUpdated;
    data: {
        id: string,
        uptime: number
    }
}