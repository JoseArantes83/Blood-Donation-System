import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
