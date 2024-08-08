/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Body, Param, ParseIntPipe} from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('generos')
export class GenerosController {
    constructor(private readonly generosService: GenerosService ) {}
    
    @Post('crear')
    createGenero(@Body() generoDto: CreateGeneroDto) {
        return this.generosService.createGenero(generoDto)
    }
    
    @Get('obtener/all')
    getGeneros() {
        return this.generosService.getGeneros()
    }

    @Get('obtener/:id')
    getGenero(@Param('id', ParseIntPipe) id: number) {
        return this.generosService.getGenero(id)
    }

    @Patch('actualizar/:id')
    updateGenero(@Param('id', ParseIntPipe) id: number, @Body() generoDto: UpdateGeneroDto){
        return this.generosService.updateGenero(id, generoDto)
    }

    @Delete('eliminar/:id')
    deleteGenero(@Param('id', ParseIntPipe) id: number) {
        return this.generosService.deleteGenero(id)
    }
}
