import {CorsOptions} from 'cors'

export const corsConfig:CorsOptions={
    origin: function(origin,callback){
        if(origin==="http://localhost:5173"){
            console.log("permitir conexión")
            callback(null,true);
        }else{
            console.log("rechazar conexión")
            callback(new Error("No permitido"),false)
        }
    }
}