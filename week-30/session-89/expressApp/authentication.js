import express from 'express';
import authMiddleware from './middleware/auth.js';
import router from './routes/useRoutes.js';

const app=express();

app.use(express.json()); 

//Routing
app.use(router);

app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)