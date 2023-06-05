import { Request, Response } from "express";
import {loginService, registerService} from '../service/auth.service'

export const register = async (req: Request, res: Response) => {
    try {
        const user = await registerService(req)
        res.json(user).status(200)
    } catch (e: any) {
        res.status(500).json({'msg': 'Invalid Fields'})
    }
    
}

export const login = async (req: Request, res: Response) => {
    try {
        const token = await loginService(req)
        res.header('auth-token', token).status(200).json('Login Success')
    } catch (e: any) {
        res.status(403).json({'msg': 'Invalid email or password'})
    }  
}