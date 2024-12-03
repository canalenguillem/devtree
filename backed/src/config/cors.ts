import {CorsOptions} from 'cors'

export const corsConfig:CorsOptions={
    origin: function(origin,callback){
        console.log("env",process.env.FRONTEND_URL)
        if(origin===process.env.FRONTEND_URL){
            console.log("permitir conexión")
            callback(null,true);
        }else{
            console.log("rechazar conexión")
            callback(new Error("No permitido"),false)
        }
    }
}