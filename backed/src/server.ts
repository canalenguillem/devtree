//const express = require("express"); //CJS common
import express from "express"; //ESM Ecmoscript modules
import 'dotenv/config'
import router from "./router";
import { connectDB } from "./config/db";
import cors from 'cors'
import { corsConfig } from "./config/cors";
connectDB();

const app = express();

//configurar CORS
app.use(cors(corsConfig))

//leer datos de formularios
app.use(express.json())

app.use('/',router)


export default app
