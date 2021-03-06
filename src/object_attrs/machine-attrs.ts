export interface MachineFieldAttrs {
    name: string,
    maintenanceTime: number,
    material: string,
    errorRate: number,
    initialCost: number,
    maintenanceCost: number,
    operationCost: number,
    laborCost: number
}

export interface MachineDBAttrs extends MachineFieldAttrs {
    id: string;
}