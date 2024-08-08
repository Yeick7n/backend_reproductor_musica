/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Repository } from 'typeorm';
import { Genero } from './entities/genero.entity';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GenerosService {
    constructor(@InjectRepository (Genero) private generoRepository: Repository<Genero>) {}

    createGenero(genero: CreateGeneroDto) {
        const newGenero = this.generoRepository.create(genero)
        return this.generoRepository.save(newGenero);
    }

    async getGenero(id: number) {
        const generoFound = await this.generoRepository.findOne({
            where: {
                id,
            },
        });

        if(!generoFound) {
            return new HttpException('Genero no encontrado', HttpStatus.NOT_FOUND)
        }
        return generoFound;
    }

    getGeneros() {
        return this.generoRepository.find()
    }

    async updateGenero(id: number, genero: UpdateGeneroDto) {
        const generoFound = await this.generoRepository.find({
            where: {
                id,
            },

        });

        if(!generoFound) {
            return new HttpException('Genero no envontrado', HttpStatus.NOT_FOUND)
        }

        return this.generoRepository.update(id, genero)
    }

    async deleteGenero(id: number) {
        const generoFound = await this.generoRepository.find({
            where: {
                id,
            },
        });

        if(!generoFound) {
            return new HttpException('Genero no encoontrado', HttpStatus.NOT_FOUND)
        }

        return this.generoRepository.delete(id);
    }
}
