// Build the User model
import mongoose from "mongoose";
// Import bcrypt to hash passwords
import bcrypt from 'bcryptjs';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    firstName: {
        required: [true, 'First name is required'],
        type: String,
    },
    lastName: {
        required: [true, 'Last name is required'],
        type: String,
    },
    email: {
        required: [true, 'Email name is required'],
        type: String,
    },
    password: {
        required: [true, 'Password name is required'],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
});

// Hash the password before saving the user
    userSchema.pre('save', async function(next) {
    // Check if the password field is modified to avoid hashing the password again
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); // Proceed to save the user 
   })

// Compile the schema into a model
const User = mongoose.model('User', userSchema); 

export default User;