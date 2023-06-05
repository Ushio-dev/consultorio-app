import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ReservedDate } from './ReserverdDate';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    dni: number

    @OneToMany(() => ReservedDate, (date) => date.user)
    reservedDate: ReservedDate[];
}