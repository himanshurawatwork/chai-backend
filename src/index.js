import dotenv from "dotenv"
import connectDB from "./db/dbConnect.js";

dotenv.config({
    path:"./env"
})

connectDB()


















/*

import express from "express";
const app =  express();

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("BACKEND ERROR",error);
            throw error;
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`app is istening on ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR", error);
        throw new Error("error");
        
    }
})()

*/