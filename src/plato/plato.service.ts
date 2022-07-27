import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Plato } from './interface/plato.interface';
import { CreatePlatoDTO } from './dto/plato.dto';


@Injectable()
export class PlatoService {
    constructor(@InjectModel('Plato') private readonly platoModel : Model <Plato>){}

        async getPlatos(): Promise<Plato[]>{
            const platos = await this.platoModel.find()
            return platos;
        }

        async getPlato(platoId: string): Promise<Plato>{
            const plato = await this.platoModel.findById(platoId);
            return plato;
        }

        async createPlato(createPlatoDTO : CreatePlatoDTO) : Promise<Plato>{
            const plato = new this.platoModel(createPlatoDTO);  //crea el plato
            await plato.save()                                  //guarda
            return plato;                           
        }

        async deletePlato(platoId: string): Promise<Plato>{
            const plato = await this.platoModel.findByIdAndDelete(platoId);
            return plato;
        }

        async updatePlato(platoId: string, createPlatoDTO : CreatePlatoDTO) : Promise<Plato>{
            const platoUPD = await this.platoModel.findByIdAndUpdate(platoId,createPlatoDTO, {new: true});   //ultimo parametro define que retorne el objeto updateado y no el original
            return platoUPD;
        }


    
}
