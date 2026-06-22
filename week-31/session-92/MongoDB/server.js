import express from 'express';
import connectDB from "./config/db.js";
import useRoutes from "./routes/userRoutes.js";
import authrouter from './routes/authRoutes.js';

import session from 'express-session';
import passport from './config/passport.js';

const app = express();

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

// Routes
app.use("/users", useRoutes);
app.use("/auth", authrouter);

app.listen(3000, () =>
    console.log(
        'Server is Running and up! \nvisit: http://localhost:3000'
    )
);