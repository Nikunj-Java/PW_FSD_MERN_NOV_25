import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    const URI=process.env.MONGODB_ATLAS;
    try {
        //console.log(process.env.MONGODB_ATLAS);
        await mongoose.connect(URI);

        console.log('MongoDB Connected');

    } catch (error) {

        console.error(error.message);

        process.exit(1);
    }
};

export default connectDB;