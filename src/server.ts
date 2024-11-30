//const express = require("express"); //CJS common
import express from "express"; //ESM Ecmoscript modules
import 'dotenv/config'
import router from "./router";
import { connectDB } from "./config/db";

const app = express();

connectDB();
//leer datos de formularios
app.use(express.json())

app.use('/',router)


export default app
