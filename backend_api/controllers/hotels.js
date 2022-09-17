import Hotel from "../models/Hotels.js";

// post
export const createHotel = async (req , res , next) => {  
    const NewHotel = new Hotel(req.body);

    try {
      const SavedHotel = await NewHotel.save();
      res.status(200).json({
        status:200,
        message: "Hotel created",
        data:SavedHotel
      });
      console.log("New Hotel Record Added Successfully ! ❤️❤️❤️");
    } catch (error) {
      next(error);
    } 
};

// delete
export const DeleteHotel = async (req , res , next) => {  
    try {
        const DeleteHotel = await Hotel.findByIdAndDelete(req.params.id); 
        res.status(200).json({
          status: 200,
          message: "Hotel Record Deleted Successfully ! ⏰⏰⏰",
          data: { DeleteHotel}});
        console.log("Hotel Record Deleted Successfully ! ⏰⏰⏰");
      } catch (error) {
        next(error);
      }
};

// put
export const UpdateHotel = async (req , res , next) => {  
    try {
        const UpdateHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        ); //{new: true} => showm new updated json format with new data
        res.status(200).json({
          status: 200,
          message: "Hotel Record Updated Successfully ! 🥳🥳🥳",
          data: { UpdateHotel}});
        console.log("Hotel Record Updated Successfully ! 🥳🥳🥳");
      } catch (error) {
        next(error);
      }
};

// get specific
export const GetSpecificHotel = async (req , res , next) => {  
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json({
          status: 200,
          message: "Hotel Record Get Successfully ! 😍😍😍",
          data: { hotel}});
        console.log("Hotel Record Get Successfully ! 😍😍😍");
      } catch (error) {
        next(error);
      }
};

// get All Hotel
export const GetAllHotel = async (req , res , next) => {  
    // const failed = true;
  // if (failed) {return next(createerror(401,"error"));}

  try {
    const hotels = await Hotel.find();
    //const hotels = await Hotel.findid("lskdjfklsj"); // For the testing of error ...
    res.status(200).json({
      status: 200,
      message: "Hotels Record Get Successfully ! 😊😊😊",
      data: { hotels}});
    console.log("Hotels Record Get Successfully ! 😊😊😊");
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};