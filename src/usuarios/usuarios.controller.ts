/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
// import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post('login')
    async login(@Body() body: { usuario: string; contraseña: string }) {
        return this.usuariosService.validarUsuario(body.usuario, body.contraseña);
    }

    @Post('crear')
    createUsuario(@Body() usuarioDto: CreateUsuarioDto) {
        return this.usuariosService.createUsuario(usuarioDto)
    }

    @Get('obtener/all')
    getUsuarios() {
        return this.usuariosService.getUsuarios()
    }

    @Get('obtener/:id')
    getUsuario(@Param('id', ParseIntPipe) id: number){
        return this.usuariosService.getUsuario(id)
    }

    @Patch('actualizar/:id')
    updateUsuario(@Param('id', ParseIntPipe) id: number, @Body() usuarioDto: UpdateUsuarioDto) {
        return this.usuariosService.updateUsuario(id, usuarioDto)
    }

    @Delete('eliminar/:id')
    deleteUsuario(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.deleteUsuario(id)
    }
}