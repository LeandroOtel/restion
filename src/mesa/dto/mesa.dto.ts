import { Plato } from "src/plato/interface/plato.interface";

export class CreateMesaDTO{
    readonly numeroDeMesa: number;
    readonly ubicacion: string;
    readonly total: number;
    readonly platos: Plato[];
}