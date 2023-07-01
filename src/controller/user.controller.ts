import { Request, Response } from 'express';
import { getDatesService, saveDateService } from '../service/user.service';

export const getDates = async (req: Request, res: Response) => {
    try {
        const dates = await getDatesService(req, res);
        console.log(dates);
        res.json(dates);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ 'mgs': error.message });
    }
}

export const saveDate = async (req: Request, res: Response) => {
    try {
        const date = await saveDateService(req, res);
        console.log(date);
        res.json(date);
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ 'mgs': error.message });
    }
}