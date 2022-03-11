// require dependencies
const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// extracting information from the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// extracting PORT from dotenv
const { PORT, DATABASE_URI } = process.env;


const userRouter = require("./routes/user.route");
const adminRouter = require("./routes/admin.route");
const fixtureRouter = require("./routes/fixture.route");
const teamRouter = require("./routes/team.route");


// connecting to DB
const {connectDB} = require("./database/connect.database");
connectDB();

// base endpoint
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// base endpoint
app.use("/api/v1", userRouter);
app.use("/api/v1", adminRouter);
app.use("/api/v1", fixtureRouter);
app.use("/api/v1", teamRouter);


// server connection
app.listen(PORT, async () => {
  console.log(`The app is listening on PORT ${PORT}`);
});