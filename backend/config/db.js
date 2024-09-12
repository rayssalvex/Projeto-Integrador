import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Encerra o processo em caso de erro
    }
};