import express from 'express'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use("/auth", authRoutes)
app.use("/", userRoutes)


export default app