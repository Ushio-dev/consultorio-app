import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Doctor } from "./Doctor";

@Entity()
export class ReservedDate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'date'
    })
    date: string;

    @Column()
    time: string;

    @ManyToOne(() => User, (user) => user.reservedDate)
    user: User;

    @OneToOne(() => Doctor)
    @JoinColumn()
    doctor: Doctor;
}