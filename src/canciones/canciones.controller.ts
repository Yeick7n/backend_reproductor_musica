/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Controller('canciones')
export class CancionesController {

    constructor(private readonly cancionesService: CancionesService) {}

    @Post('crear')
    createCancion(@Body() Cancion: CreateCancionDto) {
        return this.cancionesService.createCancion(Cancion)
    }

    @Get('obtener/all')
    getCanciones() {
        return this.cancionesService.getCanciones();
    }

    @Get('obtener/:id')
    getCancion(@Param('id', ParseIntPipe) id: number) {
        return this.cancionesService.getCancion(id);
    }

    @Patch('actualizar/:id')
    updateCancion(@Param('id', ParseIntPipe) id:number, @Body() cancion: UpdateCancionDto) {
        return this.cancionesService.updateCancion(id, cancion)
    }

    @Delete('eliminar/:id')
    deleteCancion(@Param('id', ParseIntPipe) id: number){
        return this.cancionesService.deleteCancion(id)
    }

}
