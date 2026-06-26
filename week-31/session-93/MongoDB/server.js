import express from 'express';
import cors from 'cors'
 
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import useRoutes from "./routes/userRoutes.js"

import searchRoutes from "./routes/searchRoute.js"
import authrouter from './routes/authRoutes.js';

import session from 'express-session';
import passport from './config/passport.js';
import dotenv from 'dotenv';

dotenv.config();

const app= express();
const PORT=process.env.PORT || 3000;
//cross Origin Dependency
// npm installa cors 
// import cors from 'cors'
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
//app.use(cors());
//app.use(cors({ origin: '*' }));
app.use(express.json());


// Session Middleware FIRST
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
 
connectDB();

app.use("/users",useRoutes);
app.use("/search",searchRoutes);
app.use("/auth", authrouter);


app.listen(PORT,()=>
    console.log(`Server is Running and up! \nvisit: http://localhost:${PORT}`)
)