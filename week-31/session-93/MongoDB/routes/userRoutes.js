import express from 'express';

import { createUser, deleteUserById, getAllUsers, getMultipleParams, getQueryParams, getUserByID, updateUserByID } from '../controller/userController.js';
import authrouter from './authRoutes.js';

const route=express.Router();

route.post("/",createUser);
route.post("/login",authrouter);
//route.get("/",getAllUsers);
route.get("/:id",getUserByID);
route.put("/:id",updateUserByID);
route.delete("/:id",deleteUserById);

// multiple routes can be added here as per requirement
route.get("/:id/posts/:postid", getMultipleParams);

//query params: http://localhost:3000/users?page=1&limit=2
route.get("/",getQueryParams);
// similarly you can  implement search, filter, sort, pagination etc. using query params



export default route;
