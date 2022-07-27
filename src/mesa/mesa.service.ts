import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Mesa } from './interface/mesa.interface';
import { CreateMesaDTO } from './dto/mesa.dto';


@Injectable()
export class MesaService {
    constructor(@InjectModel('Mesa') private readonly mesaModel: Model<Mesa>){

    }

    async getMesas(): Promise<Mesa[]>{
        const mesas = await this.mesaModel.find();
        return mesas

    }

    async getMesa(mesaId: string): Promise<Mesa>{
        const mesa =await this.mesaModel.findById(mesaId);
        return mesa;

    }

    async createMesa(createMesaDTO: CreateMesaDTO): Promise<Mesa>{
        const mesa = await new this.mesaModel(createMesaDTO);
        await mesa.save();
        return mesa;
    }

    async deleteMesa(mesaId: string): Promise<Mesa>{
        const mesa = await this.mesaModel.findByIdAndDelete(mesaId);
        return mesa;
    }

    async updateMesa(mesaId: string, createMesaDTO: CreateMesaDTO): Promise<Mesa>{
        const mesa = await this.mesaModel.findByIdAndUpdate(mesaId,createMesaDTO,{new:true});
        return mesa;
    }
}
