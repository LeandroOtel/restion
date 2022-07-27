import { Plato } from "./plato";

export interface Mesa{
    _id? : string;
    numeroDeMesa: number;
    ubicacion : string;
    total: number;
    platos: Plato[]
    createdAt?: Date;
}