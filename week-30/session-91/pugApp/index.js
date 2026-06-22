// npm install express pug

import express from "express";
import blogRouters from "./routes/blogRoutes.js"

const app=express();

// get your system ready for Pug Template Engine
app.set('view engine','pug');
// View Folder for Pug Templates
app.set('views','./views')

app.use("/",blogRouters)

app.listen(3000,()=>console.log('Server is running and Up!'))