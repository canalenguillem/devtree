import type {Request,Response} from 'express'
import {validationResult} from 'express-validator'
import slug from 'slug';
import User from "../models/User"

import { hashPassword,checkPassword } from '../utils/auth'
import { generateJWT } from '../utils/jwt';
import { compareSync } from 'bcrypt';

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

export const getUser = async(req:Request,res:Response)=>{
    console.log("desde get user")   
    res.json(req.user) 

}

export const updateProfile=async(req:Request,res:Response)=>{
    try{
        const {description}=req.body

        //comprobamos el hanle
        const handle=slug(req.body.handle,'')
        const existingHandle=await User.findOne({handle})
        if(existingHandle && existingHandle.email!==req.user.email){
            const error=new Error('El handle ya existe')
            res.status(409).json({error:error.message})
            return
        }


        //Actualizar el usuario
        req.user.description=description
        req.user.handle=handle

        await req.user.save()
        res.send("Perfil actualizado correctamente")

    }catch(e){
        console.error("Error en la validación: ",e)
        const error=new Error('Error actualizando perfil')
        res.status(500).json({error:error.message})
        return
    }
}
