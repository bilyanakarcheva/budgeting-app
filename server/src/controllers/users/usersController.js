import expressAsyncHandler from 'express-async-handler';
import User from '../../models/User.js';

// Register a new user
export const registerUser = expressAsyncHandler(async (req, res) => {
    const { email, firstName, lastName, password } = req?.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }
    try {
        const user = await User.create({
            email, 
            firstName,
            lastName,
            password,
        });
        res.status(200).json(user); // 201 Created
    } catch (error) {
        res.json({ 
            message: error.message,
            error: error
         });
    }
});

// Fetch all users
export const fetchUsers = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.json({ 
            message: error.message,
            error: error
         });
        
    }
});

