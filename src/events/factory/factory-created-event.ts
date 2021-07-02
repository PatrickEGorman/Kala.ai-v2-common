import {Subjects} from "../subjects";

export interface FactoryCreatedEvent {
    subject: Subjects.FactoryCreated;
    data: {
        name: string;
        location: { lat: number, long: number };
        cost: number;
        storage: number;
        maintenanceTime: number;
        maintenanceCost: number;
    }
}