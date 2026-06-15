import express from 'express';
import logger from './middleware/logger.js';
// npm install express
const app=express();
const PORT=5000;

//app.use(express.json()); //middleware
app.use(logger); // custom middleware

app.post('/users',(req,res)=>{
    res.json({
        Meassage: "Data Received",
        Data: req.body
    })
})
/*
open postmen and select POST Method
use url: http://localhost:5000/users
choose=> Raw > JSON
{
    "name":"Nikunj Soni",
    "city":"Mumbai"
}

OUTPUT:
{
    "Meassage": "Data Received",
    "Data": {
        "name": "Nikunj Soni",
        "city": "Mumbai"
    }
}
*/

app.listen(PORT,()=>
    console.log(`Server is Running and up! \nvisit: http://localhost:${PORT}`)
)