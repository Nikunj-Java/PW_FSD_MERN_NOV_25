import express from 'express';
import { searchUsers } from '../controller/useSearchController.js';


const searchRoute=express.Router();

//Search: http://localhost:3000/search?email=nikunjsoni@pw.live
searchRoute.get("/",searchUsers);

export default searchRoute;