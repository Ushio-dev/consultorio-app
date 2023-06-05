import { Request } from "express";
import { User } from "../entities/User";
import { Account } from "../entities/Account";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerService = async (req: Request): Promise<User> => {
    const user = new User()
    user.name = req.body.name
    user.lastname = req.body.lastname
    user.dni = req.body.dni

    const account = new Account()
    account.email = req.body.email
    account.password = await encryptPassword(req.body.password)

    const savedUser = await user.save()
    account.user = savedUser
    account.save()

    return user
}

async function encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

export const loginService = async (req: Request): Promise<string>  => {
    const account: Account = await Account.findOne({where: {'email': req.body.email}, relations: {user: true}}) as Account
    const correctPassword:  boolean = await validatePassword(req.body.password, account!.password)

    if (!correctPassword) {
        throw new Error('Incorrect Password')
    }

    const token: string = jwt.sign({'id': account?.user.id}, process.env.TOKEN_SECRET || 'testtoken', {
        expiresIn: 60 * 60 * 24
    })

    return token
}

async function validatePassword(reqPassword: string, password: string): Promise<boolean> {
    return await bcrypt.compare(reqPassword, password)
}