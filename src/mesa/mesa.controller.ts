import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateMesaDTO } from './dto/mesa.dto' 
import { MesaService } from './mesa.service';  

@Controller('mesa')
export class MesaController {

    constructor(private mesaService: MesaService){

    }


    @Post('/create')
    async createPost(@Res() res, @Body() createMesaDTO: CreateMesaDTO){
        const mesa = await this.mesaService.createMesa(createMesaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Mesa creada satisfactoriamente', 
        mesa : mesa
        });
    }

    @Get('/')
    async getMesas(@Res() res){
    const mesas = await this.mesaService.getMesas();
    return res.status(HttpStatus.OK).json(
       
        mesas
        )
    }

    
    @Get('/:mesaID')
    async getMesa(@Res() res, @Param('mesaID') mesaID) {
        const mesa = await this.mesaService.getMesa(mesaID);
        if (!mesa) throw new NotFoundException('La mesa no existe');
        return res.status(HttpStatus.OK).json(mesa);
    }

    @Delete('/delete')
    async deleteMesa(@Res() res, @Query('mesaID') mesaID) {
        const deletedMesa = await this.mesaService.deleteMesa(mesaID);
        if (!deletedMesa) throw new NotFoundException('La mesa no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'mesa eliminado satisfactoriamente.',
            deletedMesa
        });
    }

    @Put('/update')
    async updateMesa(@Res() res, @Body() createMesaDTO: CreateMesaDTO, @Query('mesaID') mesaID) {
        const updatedMesa = await this.mesaService.updateMesa(mesaID, createMesaDTO);
        if (!updatedMesa) throw new NotFoundException('La mesa no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Mesa actualizada satisfactoriamente.',
            updatedMesa 
        });
    }

}
