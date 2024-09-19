import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
// userRouter.get('/favoriites/add',getFavorites);
// userRouter.post('/favoriates/add', addFavorite);
// userRouter.post('/favoriates/remove', removeFavorite);



export default userRouter;

// addFavorite, removeFavorite, getFavorites