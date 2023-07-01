import { Request, Response } from 'express';
import { ReservedDate } from '../entities/ReserverdDate';
import { User } from '../entities/User';
import { Doctor } from '../entities/Doctor';


export const getDatesService = async (req: Request, res: Response) => {
    const user= await User.findOne({where: {id: parseInt(req.userId)}}) as User;
    const dates = ReservedDate.find({relations: {doctor: true}, where: {user: {id: user.id}}});
    return dates;
}

export const saveDateService = async (req: Request, res: Response) => {
    const date = new ReservedDate();
    const user= await User.findOne({where: {id: parseInt(req.userId)}}) as User;
    const doctor = await Doctor.findOne({where: {id: req.body.doctorId}}) as Doctor;
    date.user = user;
    date.day = req.body.day;
    date.time = req.body.time;
    date.doctor = doctor;
    await date.save();
    return date;
}