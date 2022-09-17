import mongoose from "mongoose";

const { Schema } = mongoose;

const RoomsSchema = new mongoose.Schema({
  hotelname:{
    type:String,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  description: {
    type:String,
    required: true,
    unique: false
  },
  rooms: 
  [
    {
      RoomNumber:{type:Number},
      unavailableDates:[{type:Date}]
    }
  ]
},
{timestamps: true}, // show created and updated time in database
);

export default mongoose.model("Room",RoomsSchema);