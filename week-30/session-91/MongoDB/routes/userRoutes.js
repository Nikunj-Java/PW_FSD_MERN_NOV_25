import express from 'express';

import { createUser, getAllUsers, getUserByID } from '../controller/userController.js';

const route=express.Router();

route.post("/",createUser);
route.get("/",getAllUsers);
route.get("/:id",getUserByID);

export default route;
