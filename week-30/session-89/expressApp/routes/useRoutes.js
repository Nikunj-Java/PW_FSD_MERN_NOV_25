import express from 'express'
import authMiddleware from '../middleware/auth.js'

const router=express.Router();

router.get("/home",(req,res)=>{
    res.send('welcome to PW SKILLS')
});

//protected route
router.get("/dashboard",authMiddleware,(req,res)=>{ // add middleware here
     res.json({
        message:'Welcome to DASHBOARD'
     })
});
 


export default router;