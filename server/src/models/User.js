// Build the User model
import mongoose from "mongoose";

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


// Compile the schema into a model
const User = mongoose.model('User', userSchema);

export default User;