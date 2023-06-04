import "reflect-metadata"
import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import { AppDataSource } from "./db"

async function main() {
    await AppDataSource.initialize()
    console.log('conectado')
    app.listen(3000, () => {
        console.log(`Server on Port ${3000}`)
    })
}

main()