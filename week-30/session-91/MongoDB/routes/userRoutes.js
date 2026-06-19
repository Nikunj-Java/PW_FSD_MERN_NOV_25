import express from 'express';

import { createUser, deleteUserById, getAllUsers, getUserByID, updateUserByID } from '../controller/userController.js';

const route=express.Router();

route.post("/",createUser);
route.get("/",getAllUsers);
route.get("/:id",getUserByID);
route.put("/:id",updateUserByID);
route.delete("/:id",deleteUserById);

export default route;
