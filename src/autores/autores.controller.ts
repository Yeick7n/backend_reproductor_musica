/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller('autores')
export class AutoresController {

    constructor(private readonly autoresService: AutoresService){}

    @Post('crear')
    createAutor(@Body() autor: CreateAutorDto) {
        return this.autoresService.createAutor(autor)
    }

    @Get('obtener/all')
    getAutores() {
        return this.autoresService.getAutores()
    }

    @Get('obtener/:id')
    getAutor(@Param('id', ParseIntPipe) id: number) {
        return this.autoresService.getAutor(id)
    }

    @Patch('actualizar/:id')
    updateAutor(@Param('id', ParseIntPipe) id: number, @Body() autor: UpdateAutorDto) {
        return this.autoresService.updateAutor(id, autor)
    }

    @Delete('eliminar/:id')
    deleteAutor(@Param('id', ParseIntPipe) id: number) {
        return this.autoresService.deleteAutor(id)
    }
}
