import express, { urlencoded } from 'express'
// import cookieParser from 'cookie-parser';
import cors from 'cors'

const app =  express();

// to connect the backend to frontend 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


//  to accept the json data
app.use(express.json({
    limit:"16kb",
}))

// to accept the datat from URL
app.use(express.urlencoded({extended:true, limit:"16kb"}))

// to configure the public folder
app.use(express.static("public"))

// confire cookie-parser to perform the crud operation in browser cookies
// app.use(express.cookieParser())


// route import
import router from './routes/user.route.js';

app.use("/api/v1/users" ,router)



export {app}