import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LocalDate, LocalTime } from '@js-joda/core';
import { Doador } from "../../doador/entities/doador.entity";

@Entity('doacao')
export class Doacao {

    @PrimaryGeneratedColumn('increment')
    codigo: number;

    @Column('text')
    data: LocalDate;

    @Column('text')
    hora: LocalTime;

    @Column('decimal', { precision: 10, scale: 3 })
    volume: number;

    @Column('text', { default: 'ATIVO' })
    situacao: string;

    @ManyToOne(() => Doador, (doador) => doador.doacoes)
    @JoinColumn({ name: 'codigo_doador' })
    doador: Doador;
}
