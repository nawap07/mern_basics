import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import { router } from "./routers/pawan.router.js";
const app=express();
dotenv.config();
app.use(express.json());
app.use("/api",router)
app.get("/",(req,res)=>{
    res.send("Good AfterNoon Pawan")
})
app.listen(3000,()=>{
    connectDB();
    console.log(`Server starte at PORT: http://localhost:3000`);
})