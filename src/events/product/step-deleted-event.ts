import {Subjects} from '../subjects';
import {MachineDBAttrs} from "../../object_attrs/machine-attrs";

export interface StepDeletedEvent {
    subject: Subjects.StepDeleted;
    data: {
        id: string
    }
}