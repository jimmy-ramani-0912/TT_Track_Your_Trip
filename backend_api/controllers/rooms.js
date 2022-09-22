import Hotel from "../models/Hotels.js";
import Room from "../models/Rooms.js";

// Post
export const CreateRoom = async (req, res, next) => {
  const HotelId = req.params.hotelid;

  const HotelName = (await Hotel.findById(req.params.hotelid)).name;

  const NewRoom = new Room({
    hotelname: HotelName,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price,
    maxPeople: req.body.maxPeople,
    rooms: req.body.rooms,
  });

  try {
    const SavedRoom = await NewRoom.save();
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        // here we let/use Hotel model cuz  we add room into hotel particular hotel with hotelid
        $push: { rooms: SavedRoom._id }, // here push rooms into hotel
      });
    } catch (errors) {
      next(errors);
    }
    res.status(200).json({
      status: 200,
      message:
        "New Rooms Added To The Specific Hotel Successfully & Created Rooms Detils is Below ! 🔥🔥🔥",
      data: { HotelName: HotelName, SavedRoom },
    });
    console.log("New Rooms  Record Added In Hotel Successfully ! ❤️❤️❤️");
  } catch (error) {
    next(error);
  }
};

// delete all the rooms of specific hotel
export const DeleteRoom = async (req, res, next) => {
  const HotelId = req.params.hotelid;

  try {
    const DeletedRoomsOfSpecificHotel = await Room.findByIdAndDelete(
      req.params.id
    );
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        // here we let/use Hotel model cuz  we add room from hotel lists
        $pull: { rooms: req.params.id }, // here pull/update one unique room_id
      });
    } catch (errors) {
      next(errors);
    }
    res.status(200).json({
      status: 200,
      message:
        "Room Record Deleted Successfully & Deleted Rooms Detils is Below ! 🔥🔥🔥",
      data: { DeletedRoomsOfSpecificHotel },
    });
    console.log("Room Record Deleted Successfully ! ⏰⏰⏰");
  } catch (error) {
    next(error);
  }
};

//delete specific room of specific hotel
export const DeleteSpecificRoomOfSpecificHotel = async (req, res, next) => {
  const HotelId = req.params.hotelid;
  const RoomId = req.params.id;
  const RoomNoId = req.params.roomnoid;

  const HotelName = (await Hotel.findById(HotelId)).name;
  const length = (await Room.findById(RoomId)).rooms.length;

  console.log(length + "======================");

  for (let i = 0; i < length; i++) {
    const RoomNo_Id = (await Room.findById(req.params.id)).rooms[i]._id;
    console.log(RoomNo_Id + "fsnnnnnnnklnnnnnnnnnnnnnnnnnnnn");
    if (RoomNo_Id == RoomNoId) {
      try {
        await Room.findById(RoomId).rooms[i].findByIdAndUpdate(RoomNoId, {
          $pull: { rooms: req.params.id },
        });
        res.status(200).json({
          status: 200,
          message:
            "Specific Room Deleted From The Specific Hotel Successfully & Created Rooms Detils is Below ! 🔥🔥🔥",
          data: {
            HotelName: HotelName,
            RoomNoId: RoomNo_Id,
            RoomDetail: (await Room.findById(req.params.id)).rooms[i],
          },
        });
      } catch (error) {
        next(error);
      }
    }
  }
};

// put
export const UpdateRoom = async (req, res, next) => {
  try {
    const UpdateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //{new: true} => showm new updated json format with new data
    res.status(200).json({
      status: 200,
      message: "Update Room Details Successfully",
      data: { UpdateRoom },
    });
    console.log("Room Record Updated Successfully ! 🥳🥳🥳");
  } catch (error) {
    next(error);
  }
};

// get For All Rooms of specific Hotels of hotel
export const GetSpecificRoom = async (req, res, next) => {
  try {
    const SpecificHotelRooms = await Room.findById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Rooms Of Specific Hotel Successfully",
      data: { SpecificHotelRooms },
    });
    console.log("Room Record Get Successfully! 😍😍😍");
  } catch (error) {
    next(error);
  }
};

// get all rooms of the hotels
export const GetAllRoom = async (req, res, next) => {
  // const failed = true;
  // if (failed) {return next(createerror(401,"error"));}

  try {
    const AllHotelRooms = await Room.find();
    // const hotels = await Hotel.findById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Rooms Detail Of All The Hotels Successfully",
      data: { AllHotelRooms },
    });
    console.log("Rooms Records Of All The Hotels Get Successfully ! 😊😊😊");
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};
