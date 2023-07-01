import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Speciality } from "./Speciality";
import { Schedule } from "./Schedule";
import { ReservedDate } from "./ReserverdDate";

@Entity()
export class Doctor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @OneToOne(() => Speciality)
    @JoinColumn()
    speciality: Speciality
/*
    @OneToMany(() => Schedule, (schedule) => schedule.doctor)
    schedule: Schedule[];
*/
    @Column({
        type: 'time'
    })
    begin: string;

    @Column({
        type: 'time'
    })
    finish: string;

    @OneToMany(() => ReservedDate, (reservedDate) => reservedDate.doctor)
    reservedDate: ReservedDate[];
}