import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreatePlatoDTO } from './dto/plato.dto';
import { PlatoService } from './plato.service';

@Controller('plato')
export class PlatoController {

    constructor(private platoService : PlatoService){}

    @Post('/create')
    async createPost(@Res() res, @Body() cretePlatoDTO : CreatePlatoDTO){

        const plato = await this.platoService.createPlato(cretePlatoDTO);
        return res.status(HttpStatus.OK).json({
            message : 'Plato creado de manera satisfactoria.',
            plato
        });
    }

    @Get('/')
    async getPlatos(@Res() res){
        const platos = await this.platoService.getPlatos();
        return res.status(HttpStatus.OK).json(
            
            platos
        )
    }

    //http://localhost:5000/plato/626dfe5fcc062276bde82666
    @Get('/:platoID')
    async getPlato(@Res() res, @Param('platoID') platoID) {
        const plato = await this.platoService.getPlato(platoID);
        if (!plato) throw new NotFoundException('El plato no existe');
        return res.status(HttpStatus.OK).json(plato);
    }

    //http://localhost:5000/plato/delete/?platoID=626dfeb6cc062276bde8266c
    @Delete('/delete')
    async deletePlato(@Res() res, @Query('platoID') platoID) {
        const platoDeleted = await this.platoService.deletePlato(platoID);
        if (!platoDeleted) throw new NotFoundException('El plato no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Plato eliminado satisfactoriamente.',
            platoDeleted
        });
    }

    //http://localhost:5000/plato/update/?platoID=626dfe5fcc062276bde82666
    @Put('/update')
    async updatePlato(@Res() res, @Body() createplatoDTO: CreatePlatoDTO, @Query('platoID') platoID) {
        const updatedplato = await this.platoService.updatePlato(platoID, createplatoDTO);
        if (!updatedplato) throw new NotFoundException('El plato no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Plato actualizado satisfactoriamente.',
            updatedplato 
        });
    }
    
}
