import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Doador {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    cpf: String;

    @Column()
    contato: String;

    @Column()
    tipoSanguineo: TipoSanguineo;

    @Column()
    rh : RH

    @Column()
    tipoRhCorretos: boolean
}
