import express, { json } from 'express';
import passport from 'passport';

const authrouter = express.Router();

//login
authrouter.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({
        success: true,
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
authrouter.get('/logout',(req, res) => {
     req.logout(err=>{
        if(err) return res.status(500).json(err);
        res.json({
            message:'Logged Out'
        })
     })

})

export default authrouter