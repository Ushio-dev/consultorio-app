import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "",
    entities: [],
    synchronize: true
})