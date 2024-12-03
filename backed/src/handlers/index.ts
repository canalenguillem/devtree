import type {Request,Response} from 'express'
import {validationResult} from 'express-validator'
import slug from 'slug';
import User from "../models/User"
import { hashPassword,checkPassword } from '../utils/auth'
import { generateJWT } from '../utils/jwt';

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

export const login=async(req:Request,res:Response)=>{
  

    //revisar si el usuari existe
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        const error=new Error('El usuario no existe')
        res.status(404).json({error:error.message})
        return
    }

    //comprobar el password
    const isPasswordCorrect=await checkPassword(password,user.password)
    if (!isPasswordCorrect){
        console.log(`isPassword... ${isPasswordCorrect}`)
        const error=new Error("Password incorrecto")
        res.status(401).json({error:error.message})
        return
    }

    console.log("autienticado.....")
    const token=generateJWT({id:user._id})
    res.send(token)
}