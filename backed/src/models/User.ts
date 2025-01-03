import mongoose, { Schema,Document } from "mongoose";

export interface IUser extends Document{
    handle:string
    name:string
    email:string
    password:string
    description:string
    image:string
}

const userSchema=new Schema({
    handle:{type:String, required:true,trim:true,lowercasse:true,unique:true},
    name:{type:String, required:true,trim:true},
    email:{type:String, required:true, unique:true,trim:true},
    password:{type:String, required:true,trim:true,lowercasse:true},
    description:{type:String,default:''},
    image:{type:String,default:''}
})

const User=mongoose.model<IUser>('User',userSchema)
export default User