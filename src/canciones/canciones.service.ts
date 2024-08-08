/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cancion } from './entities/cancion.entity';
import { Repository } from 'typeorm';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';

@Injectable()
export class CancionesService {

    constructor(@InjectRepository(Cancion) private cancionRepository: Repository<Cancion>) {}

    createCancion(cancion: CreateCancionDto) {
        const newCancion = this.cancionRepository.create(cancion)

        return this.cancionRepository.save(newCancion);
    }

    getCanciones() {
        return this.cancionRepository.find()
    }

    async getCancion(id: number) {
        const cancionFound = await this.cancionRepository.findOne({
            where: {
                id,
            },
        });

        if(!cancionFound) {
            return new HttpException('Cancion no encontrada', HttpStatus.NOT_FOUND)
        }

        return cancionFound;
    }

    async updateCancion(id: number, cancion: UpdateCancionDto) {
        const cancionFound = await this.cancionRepository.find({
            where: {
                id,
            },
        });

        if(!cancionFound) {
            return new HttpException('Cancion no encontrada', HttpStatus.NOT_FOUND)
        }

        return this.cancionRepository.update(id, cancion)
    }

    async deleteCancion(id: number) {
        const cancionFound = await this.cancionRepository.find({
            where: {
                id,
            },
        });

        if(!cancionFound) {
            return new HttpException('Cancion no encontrada', HttpStatus.NOT_FOUND)
        }

        return this.cancionRepository.delete(id);
    }
}
