import mongoose from "mongoose";
import User from "../data/user.js";
export const createUser = async (req, res) => {

    try {

        const user = await User.create({
            name: req.body.name,
            email: req.body.email
        });

        res.status(201).json({
            success: true,
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};