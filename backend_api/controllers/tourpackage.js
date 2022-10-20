import TourPackage from "../models/TourPackage.js";

// post
export const createTourPackage = async (req, res, next) => {
  const NewTourPackage = new TourPackage(req.body);

  try {
    const SavedTourPackage = await NewTourPackage.save();
    res.status(200).json({
      status: 200,
      message: "New TourPackage Record Added Successfully ! ❤️❤️❤️",
      data: { SavedTourPackage },
    });
    console.log("New TourPackage Record Added Successfully ! ❤️❤️❤️");
  } catch (error) {
    next(error);
  }
};

// delete
export const DeleteTourPackage = async (req , res , next) => {  
  try {
      const DeleteTourPackage = await TourPackage.findByIdAndDelete(req.params.id); 
      res.status(200).json({
        status: 200,
        message: "TourPackage Record Deleted Successfully ! ⏰⏰⏰",
        data: { DeleteTourPackage}});
      console.log("TourPackage Record Deleted Successfully ! ⏰⏰⏰");
    } catch (error) {
      next(error);
    }
};

// put
export const UpdateTourPackage = async (req, res, next) => {
  try {
    const UpdateTourPackage = await TourPackage.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ); //{new: true} => showm new updated json format with new data
    res.status(200).json({
      status: 200,
      message: "TourPackage Record Updated Successfully ! 🥳🥳🥳",
      data: { UpdateTourPackage },
    });
    console.log("TourPackage Record Updated Successfully ! 🥳🥳🥳");
  } catch (error) {
    next(error);
  }
};

// get specific
export const GetSpecificTourPackage = async (req, res, next) => {
  try {
    const GetSpecificTourPackage = await TourPackage.findById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "TourPackage Record Get Successfully ! 😍😍😍",
      data: { GetSpecificTourPackage },
    });
    console.log("TourPackage Record Get Successfully ! 😍😍😍");
  } catch (error) {
    next(error);
  }
};

// get All Tour Packages
export const GetAllTourPackage = async (req, res, next) => {
  // const failed = true;
  // if (failed) {return next(createerror(401,"error"));}

  try {
    const GetAllTourPackage = await TourPackage.find();
    //const hotels = await Hotel.findid("lskdjfklsj"); // For the testing of error ...
    res.status(200).json({
      status: 200,
      message: "TourPackages Record Get Successfully ! 😊😊😊",
      data: { GetAllTourPackage },
    });
    console.log("TourPackages Record Get Successfully ! 😊😊😊");
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};
