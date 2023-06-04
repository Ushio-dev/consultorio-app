import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.URL_DATABASE,
    entities: [User],
    synchronize: true
})