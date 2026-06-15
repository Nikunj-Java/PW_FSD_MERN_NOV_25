import express from 'express';
import authMiddleware from './middleware/auth.js';

const app=express();

app.use(express.json()); 

app.get("/home",(req,res)=>{
    res.send('welcome to PW SKILLS')
});

//protected route
app.get("/dashboard",authMiddleware,(req,res)=>{ // add middleware here
     res.json({
        message:'Welcome to DASHBOARD'
     })
});

app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)