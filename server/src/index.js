import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import connectDB from "./db/dbConfig.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!",err)
})
const app = express();


// (async (error) => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",() => {
//             console.log("ERROR:", error) ;
//             throw error
//         })
        
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR :" , error)
//         throw error
//     }
// })()