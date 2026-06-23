# Passport.js With MongoDB
- Instead of Fake User Use MONGODB User Model
```
import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import User from '../model/User.js';

/* fake user Database
const users=[
    {
        id:1,
        email:'admin@gmail.com',
        password:await bcrypt.hash('Nikunj@1234',10) // here 10 is cost factor(also known as 'salt')
    }
];*/

passport.use(
    new LocalStrategy(
        {
            usernameField:'email'
        },
        async (email,password,done)=>{
            //const user= users.find(u=>u.email === email);
            // find user from MongoDB
            const user= await User.findOne({email})
            if(!user){
                return done(null,false,{message:'User Not Found'});
            }
            const match= await bcrypt.compare(password,user.password)
            if(!match){
                return done(null,false,{message:'Wrong Password'});
            }
            return done(null,user);
        }
    )
);

// lets store session ID in session
/* Example:
{
    id:1,
    email:'admin@gmail.com'
}
    So Passport stores: 1
*/
passport.serializeUser(
    (user,done)=>{
        done(null,user.id);
    }
)

/* Passport receives 1
and converts it back to
{
    id:1,
    email:'admin@gmail.com'
}
 */

// retrive User from Session
passport.deserializeUser(
    async (id, done) => {

        try {

            const user =
                await User.findById(id);

            done(null, user);

        } catch (error) {

            done(error, null);

        }
    }
);
export default passport
```
- Here 
```
const user= await User.findOne({email})
```
- will give you user based on email from MongoDB Database;

## Update authRoutes.js file
```
import express, { json } from 'express';
import passport from 'passport';
import User from '../model/User.js';

const authrouter = express.Router();

//login
authrouter.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({
        success: true,
        message: 'Login successful!',
        user: req.user
    })
})

// dashboard
authrouter.post('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            message:'Please Login'
        });
    }
    res.json({
        message:'Welcome to Dashboard',
        user: req.user
    })

})

//Logout
authrouter.get('/logout', (req, res) => {

    req.logout(err => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        req.session.destroy(err => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.clearCookie('connect.sid');

            res.json({
                success: true,
                message: 'Logged Out Successfully'
            });

        });

    });

});

export default authrouter
```

## Update Server.js file
```
import express from 'express';
import cors from 'cors'
 
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import useRoutes from "./routes/userRoutes.js"

import searchRoutes from "./routes/searchRoute.js"
import authrouter from './routes/authRoutes.js';

import session from 'express-session';
import passport from './config/passport.js';


const app= express();
//cross Origin Dependency
// npm installa cors 
// import cors from 'cors'
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
//app.use(cors());
//app.use(cors({ origin: '*' }));
app.use(express.json());
connectDB();

// Session Middleware FIRST
app.use(
    session({
        secret: 'mysecretkey',
        resave: false,
        saveUninitialized: false
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/users",useRoutes);
app.use("/search",searchRoutes);
app.use("/auth", authrouter);


app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)
```
## Login 
- Now Try Login using POST Method 
```
http://localhost:3000/auth/login
```
- Pass JSON Data 
```
{
    "name":"Nikunj Soni",
    "email":"nikunj@pw.live",
    "password":"Nikunj@12345"
}
```
- You Will See that You Are Logged in
- OUTPUT:
```
{
    "success": true,
    "message": "Login successful!",
    "user": {
        "_id": "6a3a720460e2447fa15920e5",
        "name": "Nikunj Soni",
        "email": "nikunj@pw.live",
        "password": "$2b$10$pBdpgCCsHINJPZJ.JNMLWuDCH4I2MwEvOrsw9wAk9G8Jp/4Fywx3G",
        "createdAt": "2026-06-23T11:46:12.623Z",
        "updatedAt": "2026-06-23T11:46:12.623Z",
        "__v": 0
    }
}
```
## Access Dashboard Using POST Method
```
http://localhost:3000/auth/dashboard
```
- OUTPUT:
```
{
    "message": "Welcome to Dashboard",
    "user": {
        "_id": "6a3a720460e2447fa15920e5",
        "name": "Nikunj Soni",
        "email": "nikunj@pw.live",
        "password": "$2b$10$pBdpgCCsHINJPZJ.JNMLWuDCH4I2MwEvOrsw9wAk9G8Jp/4Fywx3G",
        "createdAt": "2026-06-23T11:46:12.623Z",
        "updatedAt": "2026-06-23T11:46:12.623Z",
        "__v": 0
    }
}
```

## Logout using GET Method
```
http://localhost:3000/auth/logout
```
```
{
    "success": true,
    "message": "Logged Out Successfully"
}
```
## Access Dashboard Without Login
```
http://localhost:3000/auth/dashboard
```
- OUTPUT:
```
{
    "message": "Please Login"
}
```