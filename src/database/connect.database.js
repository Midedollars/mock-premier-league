const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//  creating connection to database
const { MONGO_URL } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database is not Connected`);
  }
};

module.exports = { connectDB };