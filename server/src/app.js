// Import all the business logic and routes here
import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import { userRoute } from './routes/users/usersRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// Connection to MongoDB database
const app = express();

// env 
dotenv.config();

// dbConnect
dbConnect();

// Middleware - a function that connects the request and response objects
app.use(express.json()); // Parse JSON bodies (as sent by API clients)

app.use('/api/users', userRoute);

// Error handler
app.use(notFound);
app.use(errorHandler);

export default app;

