import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LocalDate, LocalTime } from '@js-joda/core';

@Entity({ name: 'doacao' })
export class Doacao {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({type: 'text'})
    data: LocalDate;

    @Column({type: 'text'})
    hora: LocalTime;

    @Column()
    volume: number;
}
