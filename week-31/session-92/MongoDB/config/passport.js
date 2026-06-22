import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

// fake user Database
const users=[
    {
        id:1,
        email:'admin@gmail.com',
        password:await bcrypt.hash('Nikunj@1234',10) // here 10 is cost factor(also known as 'salt')
    }
];

passport.use(
    new LocalStrategy(
        {
            usernameField:'email'
        },
        async (email,password,done)=>{
            const user= users.find(u=>u.email === email);
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
    (id,done)=>{
        const user= users.find(u=> u.id === id);
        done(null,user);
    }
)

export default passport