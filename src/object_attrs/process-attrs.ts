import * as mongoose from "mongoose";

export enum StepType {
    machine = "machine",
    intermediate = "intermediate"
}

export interface ProcessFieldAttrs {
    name: string,
    steps: [{
        id: mongoose.Schema.Types.ObjectId, stepTime: number,
        downTime: number, stepType: StepType
    }]
}

export interface ProcessDBAttrs extends ProcessFieldAttrs {
    id: number
}