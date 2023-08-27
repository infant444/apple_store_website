
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnect } from './config/database.config';
import AdminRouter from './router/admin.router';
dotenv.config();
dbconnect();
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