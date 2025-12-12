import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Ensure dotenv is loaded (in case imported before server.js)
dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined. Please set MONGODB_URI or MONGO_URI in your .env file');
    }
    
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log full error for debugging
    console.error('MongoDB Connection Error:', error);
    // In production fail fast, but during development avoid exiting so nodemon
    // doesn't immediately stop the process — this makes it easier to iterate
    // while debugging connection issues (IP whitelist, DNS, auth, etc.).
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;

