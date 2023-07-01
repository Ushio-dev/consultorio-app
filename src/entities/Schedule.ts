import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./Doctor";

export enum DateState {
    "D" = "Disponible",
    "R" = "Reservado",
    "P" = "Pendiente"
}

@Entity()
export class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'date'
    })
    date: string;

    @Column({
        type: 'time'
    })
    begin: string;

    @Column({
        type: 'time'
    })
    finish: string;

    @Column({
        type: 'enum',
        enum: DateState,
        default: DateState.D
    })
    state: DateState
/*
    @ManyToOne(() => Doctor, (doctor) => doctor.schedule)
    doctor: Doctor;
    */
}