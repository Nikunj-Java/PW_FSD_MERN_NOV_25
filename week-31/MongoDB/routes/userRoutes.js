import express from 'express';

import { createUser } from '../controller/userController.js';

const route=express.Router();

route.post("/",createUser);

export default route;
