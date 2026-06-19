import User from "../model/User.js";

export const searchUsers = async (req, res) => {
    

    try {

        const keyword = req.query.email;

        // data is coming till Here
        const users = await User.find({
            email: { $regex: keyword, $options: "i" }
        });

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}