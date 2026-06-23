import User from "../model/User.js";
import bcrypt from "bcrypt";
//01.CREATE USER
export const createUser= async(req,res)=>{

    try {
        const hashedPassword= await bcrypt.hash(req.body.password,10);
        const user= await User.create({
            name: req.body.name,
            email:req.body.email,
            password: hashedPassword
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

//03. Get user by ID
export const getUserByID= async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
//04. Update user by ID
export const updateUserByID= async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new:true,
                runValidators:true
            }
        )
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        res.json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//05 delete user by ID
export const deleteUserById= async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }   
        res.json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//06. Get multiple params
export const getMultipleParams= async(req,res)=>{
    try {
        const {id, postid}= req.params;
        res.json({
            success: true,
            data: {
                id: id,
                postid: postid
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

//07. Get query params
export const getQueryParams= async(req,res)=>{
    try {
        //const {page, age}= req.query;
        const page= Number(req.query.page) || 1;
        const limit= Number(req.query.limit) || 10;
        const skip= (page-1)*limit;
        const users = await User.find().skip(skip).limit(limit);
        res.json({
            success: true,
            data: users
        })
    }   catch (error) { 
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

