import { RH } from "../enums/rh";
import { TipoSanguineo } from "../enums/tipoSanguineo";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doacao } from "src/doacao/entities/doacao.entity";


@Entity()
export class Doador {

    @PrimaryGeneratedColumn({ name: 'codigo' })
    id: number;

    @Column({ type: 'text'})
    nome: String;

    @Column({ type: 'text'})
    cpf: String;

    @Column({ type: 'text'})
    contato: String;

    @Column({ type: 'text'})
    tipoSanguineo: TipoSanguineo;

    @Column({ type: 'text'})
    rh : RH

    @Column({ type: 'boolean', default: false })
    tipoRhCorretos: boolean

    @OneToMany(() => Doacao, (doacao) => doacao.doador)
    doacoes: Doacao[]
}
