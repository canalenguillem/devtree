import { Router } from "express";
import { createAccount, login } from "./handlers";
import {body} from 'express-validator'

const router =Router();


//routing


/* autenticación y registro*/
router.post('/auth/register',
    
    body('handle').notEmpty().withMessage("El handle no puede ir vacío"),
    body('name').notEmpty().withMessage("El nombre no puede ir vacío"),
    body('email').isEmail().withMessage("email no valido"),
    body('password').isLength({min:8}).withMessage("El pasword debe tener al menos 8 caracteres"),
    createAccount)

router.post('/auth/login',
    body('email').isEmail().withMessage("email no valido"),
    body('password').notEmpty().withMessage("El pasword es obligatoria"),
    login)

export default router;