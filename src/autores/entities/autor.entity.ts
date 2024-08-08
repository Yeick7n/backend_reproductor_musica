/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    nombre: string;

    @Column()
    pais: string;
}
