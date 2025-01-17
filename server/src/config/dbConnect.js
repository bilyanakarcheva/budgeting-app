// Connection to MongoDB database
import mongoose from 'mongoose';


const dbConnect = async () => {
    try {
        await mongoose.connect(
            ""
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default dbConnect;