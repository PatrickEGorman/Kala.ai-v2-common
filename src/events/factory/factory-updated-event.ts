import {Subjects} from "../subjects";

export interface FactoryUpdatedEvent {
    subject: Subjects.FactoryUpdated;
    data: {
        id: string;
        cost: number;
        storage: number;
        maintenanceTime: number;
        maintenanceCost: number;
        uptime: number;
    }
}