import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

const app= express();

connectDB();

app.listen(3000,()=> "Server is running and up!");