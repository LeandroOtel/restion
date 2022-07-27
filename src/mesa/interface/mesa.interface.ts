import { Document } from 'mongoose';
import { Plato } from '../../plato/interface/plato.interface'

export interface Mesa extends Document{
    readonly numeroDeMesa: number;
    readonly ubicacion: string;
    readonly platos: Plato[];
    readonly total: number;
}