import { Document } from "mongoose";

export interface Plato extends Document{
    readonly nombre : string;
    readonly precio : number;
    readonly imagen : string;
}