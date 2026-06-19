import express from 'express';

import { createUser, deleteUserById, getAllUsers, getMultipleParams, getQueryParams, getUserByID, updateUserByID } from '../controller/userController.js';

const route=express.Router();

route.post("/",createUser);
//route.get("/",getAllUsers);
route.get("/:id",getUserByID);
route.put("/:id",updateUserByID);
route.delete("/:id",deleteUserById);

// multiple routes can be added here as per requirement
route.get("/:id/posts/:postid", getMultipleParams);

//query params: http://localhost:3000/search?name=John&age=30
route.get("/",getQueryParams);

export default route;
