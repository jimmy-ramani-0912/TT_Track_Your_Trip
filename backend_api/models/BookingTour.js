import mongoose from "mongoose";

const { Schema } = mongoose;

const BookingSchema = new mongoose.Schema({
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: "Tour",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: false,
  },
},
{timestamps: true}
);


export default mongoose.model("Bookings",BookingSchema);