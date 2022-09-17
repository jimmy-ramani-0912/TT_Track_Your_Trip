import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import TourPackageRoute from "./routes/tourpackages.js";
import BookingRoute from "./routes/bookingtour.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

// const express = require("express"); instead of using this structure we directly pass "type":"module" in package.json
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB !!!🥳🥳🥳");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB !!!😢😢😢");
});

//Middlewares
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("Hello Middleware... 🤣🤣🤣");
  next();
});

//app.use(express.json) //without that we cant post on below links we provide
//or
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/tourpackages", TourPackageRoute);
app.use("/api/booking", BookingRoute);
// app.use("/api/payment", PaymentRoute);

app.use((error, req, res, next) => {
  console.log(
    "Getting Error --- If Get Any Error At Running of Above Four Routes Then It Will Show..."
  );
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something Went Wrong";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    Message: errorMessage,
    stack: error.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Listening on port 8800!!!🥳🥳🥳");
});
