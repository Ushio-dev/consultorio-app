import { Router } from "express";
import { login, register } from "../controller/auth.controller";
import { TokenValidation } from '../middleware/verifyToken'
import { getDates, saveDate } from "../controller/user.controller";

const router = Router()

router.get('/alldates',TokenValidation, getDates)
router.post("/newdate", TokenValidation, saveDate)

export default router;