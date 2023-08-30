
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnect } from './config/database.config';
import { cdconnect } from './config/cloudinary.config';
// import cloudinary from 'cloudinary';

import AdminRouter from './router/admin.router';
dotenv.config();
   
// cloudinary.v2.config({
//     cloud_name:process.env.CLOUD_NAME ,
//     api_key:process.env.CLOUD_API_KEY ,
//     api_secret:process.env.CLOUD_API_KEY_SCARTE 
// });
dbconnect();
cdconnect();
const app=express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200'],
}));


app.use('/api/admin',AdminRouter);




const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})