import express from 'express';
import users from './data/user.js';
import router from './routes/useRoutes.js';
import swaggerUi from 'swagger-ui-express';

 
const app=express();

const swaggerDocument={
    openapi:'3.0.0',
    info:{
        title:'User API',
        version:'1.0.0'
    },
     
     
    paths:{
        '/users':{
            get:{
                summary: 'Get All Users',
                responses:{
                    200:{
                        description:'List of All users'
                    }
                }
            },
            post:{
                summary: 'Create User',
                responses:{
                    201:{
                        description:'User Created'
                    }
                }
            },

        },
        '/users/:id':{
            get:{
                summary: 'Get User By Id',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        schema: {
                            type: 'integer'
                        }
                    }
                ],
                
               
                responses:{
                    200:{
                        description:'User Found'
                    }
                }
            }
            
        }
    }
        
}


app.use(express.json());
 
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.use("/users",router);

app.listen(3000,()=>
    console.log('Server is Running and up! \nvisit: http://localhost:3000')
)