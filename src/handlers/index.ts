import type {Request,Response} from 'express'
import slug from 'slug';
import User from "../models/User"
import { hashPassword } from '../utils/auth'

export const createAccount=async (req:Request,res:Response)=>{


    const {email,password}=req.body
    const userExists=await User.findOne({email})
    if(userExists){
        const error=new Error('El usuario ya existe')
        res.status(409).json({error:error.message})
        return
         
    }

    //comprobamos el hanle
    const handle=slug(req.body.handle,'')
    const existingHandle=await User.findOne({handle})
    if(existingHandle){
        const error=new Error('El handle ya existe')
        res.status(409).json({error:error.message})
        return
    }


    const user=new User(req.body)
    user.handle=handle
    user.password=hashPassword(password)

    
    await user.save()
    res.status(201).json({message: "Registro exitoso"})

}