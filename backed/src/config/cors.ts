import {CorsOptions} from 'cors'

export const corsConfig:CorsOptions={
    origin: function(origin,callback){
        const whiteList=[process.env.FRONTEND_URL]

        console.log("env",process.argv)
        if(process.argv[2]==="--api"){
            whiteList.push(undefined)
        }
        if(whiteList.includes(origin) ){
            console.log("permitir conexión")
            callback(null,true);
        }else{
            console.log("rechazar conexión")
            callback(new Error("No permitido"),false)
        }
    }
}