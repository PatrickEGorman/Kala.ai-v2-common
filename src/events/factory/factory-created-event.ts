import {Subjects} from "../subjects";

export interface FactoryCreatedEvent {
    subject: Subjects.FactoryCreated;
    data: {
        id: string;
        name: string;
        location: { lat: number, long: number };
        cost: number;
        storage: number;
        maintenanceTime: number;
        maintenanceCost: number;
    }
}