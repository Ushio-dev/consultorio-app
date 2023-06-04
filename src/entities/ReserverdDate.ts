import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Doctor } from "./Doctor";
import { Schedule } from "./Schedule";

@Entity()
export class ReservedDate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.reservedDate)
    user: User;

    @OneToOne(() => Schedule)
    @JoinColumn()
    date: Schedule;
}