import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); 
export const dbConnection = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to database!");
  } catch (err) {
    console.error("❌ Some error occurred while connecting to database:", err);
  }
};
