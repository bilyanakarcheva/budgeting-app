import express from 'express';
import { registerUser } from '../../controllers/users/usersController.js';

export const userRoute = express.Router();
userRoute.post('/register', registerUser);

