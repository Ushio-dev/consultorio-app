import "reflect-metadata"
import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import { AppDataSource } from "./db"

async function main() {
    await AppDataSource.initialize()
    console.log('conectado')
    let port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server on Port ${port}`)
    })
}

main()