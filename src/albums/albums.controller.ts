/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { AlbumsService } from './albums.service';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('albums')
export class AlbumsController {
    constructor(private readonly albumsService: AlbumsService) {}

    @Post('crear')
    createAlbum(@Body() Cancion: CreateAlbumDto) {
        return this.albumsService.createAlbum(Cancion)
    }

    @Get('obtener/all')
    getAlbums() {
        return this.albumsService.getAlbums();
    }

    @Get('obtener/:id')
    getAlbum(@Param('id', ParseIntPipe) id: number) {
        return this.albumsService.getAlbum(id);
    }

    @Patch('actualizar/:id')
    updateAlbum(@Param('id', ParseIntPipe) id:number, @Body() album: UpdateAlbumDto) {
        return this.albumsService.updateAlbum(id, album)
    }

    @Delete('eliminar/:id')
    deleteAlbum(@Param('id', ParseIntPipe) id: number){
        return this.albumsService.deleteAlbum(id)
    }
}


