import mongoose from "mongoose";

const { Schema } = mongoose;
import slugify from "slugify";

const tourSchema = new mongoose.Schema(
  {
    tourname: {
      type: String,
      required: true,
      //unique: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either: easy, medium, difficult",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4,
      min: 1,
      max: 5,
      set: (value) => Math.round(value * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      //required: true, for testing
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    //startDates: [Date],
    startDates: [
      {
        startDate: { type: String, required: true, unique: false },
      },
    ],
    secretTour: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      // GeoJSON
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("TourPackage", tourSchema);
