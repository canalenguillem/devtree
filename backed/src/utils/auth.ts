import bcrypt from 'bcrypt'

export const hashPassword = (password:string)=>{
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

export const checkPassword = async (enteredPassword:string, hash:string)=>{
    console.log(enteredPassword)
    console.log(hash);
    const result=await bcrypt.compare(enteredPassword,hash)
    console.log(`result login ${result}`)
    return result
    
}