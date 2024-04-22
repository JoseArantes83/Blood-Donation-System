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

    @Column({ type: 'text'})
    tipoSanguineo: TipoSanguineo;

    @Column({ type: 'text'})
    rh : RH

    @Column({ type: 'boolean', default: false })
    tipoRhCorretos: boolean
}
