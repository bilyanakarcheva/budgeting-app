// Import all the business logic and routes here
import express from 'express';
import dbConnect from './config/dbConnect.js';
import { userRoute } from './routes/users/usersRoutes.js';

// Connection to MongoDB database
const app = express();

// dbConnect
dbConnect();

// Middleware - a function that connects the request and response objects
const logger = (req, res, next) => {
    console.log("I am a logger");
    next();
};
app.use(logger);
app.use('/', userRoute);

export default app;

