/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>) {}

    async validarUsuario(usuario: string, contraseña: string): Promise<{ success: boolean; usuario: Usuario }> {
        const usuarioFound = await this.usuariosRepository.findOne({
            where: { usuario, contraseña }
        });
    
        if (!usuarioFound) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }
    
        return { success: true, usuario: usuarioFound };
    }

    async createUsuario(usuarioDto: CreateUsuarioDto): Promise<{ success: boolean; usuario?: Usuario; message?: string }> {

        const { usuario } = usuarioDto
        const { email } = usuarioDto

        const usuarioFound = await this.usuariosRepository.findOne({
            where: {
                usuario
            },
        });

        if(usuarioFound) {
            throw new ConflictException('Este nombre de usuario ya existe')
        }

        const emailFound = await this.usuariosRepository.findOne({
            where: {
                email
            },
        });

        if(emailFound) {
            throw new ConflictException('Este email está registrado en otra cuenta')
        }

        const newUser = this.usuariosRepository.create(usuarioDto)
        const savedUser = await this.usuariosRepository.save(newUser)

        return {
            success: true,
            usuario: savedUser
          };
    }

    getUsuarios() {
        return this.usuariosRepository.find({
            relations: ['playlists']
        });
    }

    async getUsuario(id: number) {
        const usuarioFound = await this.usuariosRepository.findOne({
            where: {
                id,
            },
            relations: ['playlists']
        });

        if(!usuarioFound) {
            throw new NotFoundException('Usuario no encontrado')
        }

        return usuarioFound;
    }

    async updateUsuario(id: number, usuarioDto: UpdateUsuarioDto) {
        const usuarioFound = await this.usuariosRepository.findOne({
            where: {
                id,
            },
        });

        if(!usuarioFound) {
            throw new NotFoundException('Usuario no encontrado')
        }

        return this.usuariosRepository.update(id, usuarioDto);
    }

    async deleteUsuario(id: number) {
        const usuarioFound = await this.usuariosRepository.findOne({
            where: {
                id,
            },
        });

        if(!usuarioFound) {
            throw new NotFoundException('Usuario no encontrado')
        }

        return this.usuariosRepository.delete(id);
    }
}