import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app= express();

app.use(express.json()); //middleware

app.use("/",(req,res)=>{
    res.send("Welcome to Express Deployment!")
})

app.listen(PORT,()=>
    console.log(`Server is Running And Up! \n: visit: http://localhost:${PORT}`)
);