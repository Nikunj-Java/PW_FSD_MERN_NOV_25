import User from "../model/User.js";
//01.CREATE USER
export const createUser= async(req,res)=>{

    try {
        const user= await User.create({
            name: req.body.name,
            email:req.body.email
        })
        res.status(201).json({
            success:true,
            data: user
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

//02 Get all users
export const getAllUsers= async(req,res)=>{
    try {
        const users=await User.find();
        res.json({
            success: true,
            count: users.length,
            data: users

        });
        
    } catch (error) {
         res.json({
            success: false,
            message: error.message
        });
    }
}