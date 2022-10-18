const mongoose = require("mongoose");


const connectDB = async (MONGODB) => {
  try {
    await mongoose.connect(MONGODB);
    console.log("MongoDB Connected to "+MONGODB+"...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;