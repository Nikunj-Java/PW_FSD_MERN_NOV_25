import express from 'express';
 
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import useRoutes from "./routes/userRoutes.js"

import searchRoutes from "./routes/searchRoute.js"

const app= express();
app.use(express.json());
connectDB();

app.use("/users",useRoutes);
app.use("/search",searchRoutes);

app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)