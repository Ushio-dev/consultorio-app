import { Router } from "express";
import { login, register } from "../controller/auth.controller";
import { TokenValidation } from '../middleware/verifyToken'

const router = Router()

router.post("/register", register)
router.post('/login', login)
router.get('/', TokenValidation)

export default router;