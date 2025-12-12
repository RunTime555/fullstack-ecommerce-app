import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

(async () => {
  if (!mongoUri) {
    console.error('MONGODB_URI not set in .env');
    process.exit(1);
  }

  try {
    // short server selection timeout so failures surface quickly
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
    console.log('Connected to MongoDB:', mongoose.connection.host);
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Mongo connect error:', err);
    process.exit(1);
  }
})();
