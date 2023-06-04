import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Account } from "./entities/Account";
import { Doctor } from "./entities/Doctor";
import { ReservedDate } from "./entities/ReserverdDate";
import { Schedule } from "./entities/Schedule";
import { Speciality } from "./entities/Speciality";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.URL_DATABASE,
    entities: [User, Account, Doctor, ReservedDate, Schedule, Speciality],
    synchronize: true
})