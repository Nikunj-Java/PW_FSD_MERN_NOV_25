import express from 'express';
import swaggerUi from 'swagger-ui-express';

import router from './routes/useRoutes.js';
import swaggerDocument from './config/swagger.js';
import connectDB from './config/db.js';

const app = express();

app.use(express.json());

app.use('/users', router);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
 

app.listen(3000, () => {
    console.log('Server Running');
    console.log('Swagger UI: http://localhost:3000/api-docs');
});