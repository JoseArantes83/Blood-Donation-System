import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LocalDate, LocalTime } from '@js-joda/core';

@Entity()
export class Doacao {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    data: LocalDate;

    @Column()
    hora: LocalTime;

    @Column()
    volume: number;
}
