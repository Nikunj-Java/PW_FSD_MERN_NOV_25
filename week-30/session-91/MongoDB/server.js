import express from 'express';
import cors from 'cors'
 
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import useRoutes from "./routes/userRoutes.js"

import searchRoutes from "./routes/searchRoute.js"

const app= express();
//cross Origin Dependency
// npm installa cors 
// import cors from 'cors'
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
//app.use(cors());
//app.use(cors({ origin: '*' }));
app.use(express.json());
connectDB();


app.use("/users",useRoutes);
app.use("/search",searchRoutes);


app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)