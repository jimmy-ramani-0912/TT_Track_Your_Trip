import mongoose from "mongoose";

const { Schema } = mongoose;

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: false,
      unique: true, // define a unique value
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    photo: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    TourPackageBooked: {
      type: [String],
    },
    HotelBooked: {
      type: [String],
    },
    RoomBooked: {
      type: [String],
    },
  },
  { timestamps: true } // show created and updated time in database
);

export default mongoose.model("User", UsersSchema);
