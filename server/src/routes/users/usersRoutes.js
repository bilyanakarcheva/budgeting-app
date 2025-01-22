import express from 'express';
import { registerUser, fetchUsers } from '../../controllers/users/usersController.js';

export const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get('/', fetchUsers);

