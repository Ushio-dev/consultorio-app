import {  Request ,NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'

interface IPayload {
    id: string;
    iat: number;
    exp: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')

    if (!token) return res.status(401).json('access denied')

    const payload = jwt.verify(token, process.env.URL_DATABASE || 'token') as IPayload
    req.userId = payload.id

    next()
} 