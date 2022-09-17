import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
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
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: "Hotel",
      required: true,
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: "Room",
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
  },
  {timestamps: true},
);

export default mongoose.model("Review", ReviewSchema);
