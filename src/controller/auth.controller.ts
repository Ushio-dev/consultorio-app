import { Request, Response } from "express";
import {loginService, registerService} from '../service/auth.service'

export const register = async (req: Request, res: Response) => {
    const user = await registerService(req)

    res.json(user).status(200)
}

export const login = async (req: Request, res: Response) => {
    try {
        const token = await loginService(req)
        res.header('auth-token', token).status(200).json('ok')
    } catch (e: any) {
        res.status(403).json({'msg': 'Invalid email or password'})
    }
    
    
}