import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LocalDate, LocalTime } from '@js-joda/core';
import { Doador } from "src/doador/entities/doador.entity";

@Entity({ name: 'doacao' })
export class Doacao {

    @PrimaryGeneratedColumn({ name: 'codigo'})
    codigo: number;

    @Column({type: 'text'})
    data: LocalDate;

    @Column({type: 'text'})
    hora: LocalTime;

    @Column()
    volume: number;

    @Column({ name: 'codigo_doador'})
    codigoDoador: number;

    @ManyToOne(() => Doador, (doador) => doador.doacoes)
    @JoinColumn({ name: 'codigo_doador'})
    doador: Doador;

}
