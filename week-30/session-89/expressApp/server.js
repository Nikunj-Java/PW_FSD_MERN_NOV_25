import express from 'express';
// npm install express
const app=express();

app.get("/",(req,res)=>{
    res.send('welcome to Express.js')
});

app.get("/about",(req,res)=>{
    res.send('About')
});

app.get("/dashboard",(req,res)=>{
    res.send('Dashboard')
});
// routing parameters
app.get("/users",(req,res)=>{
    res.send('Users')
});
app.get("/users/:id",(req,res)=>{
    res.send(req.params.id)
});

app.get("/products/:category/:id",(req,res)=>{
    res.send(req.params)
});

app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)