const mongoose = require("mongoose");

let MONGODB = process.env.MONGODB || "mongodb://localhost:27017/classman";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;