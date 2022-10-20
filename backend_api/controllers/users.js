import User from "../models/Users.js";

// delete
export const DeleteUser = async (req, res, next) => {
  try {
    const DeleteUser = await User.findByIdAndDelete(req.params.id); //{new: true} => showm new updated json format with new data
    res.status(200).json({
      status: 200,
      message: "User Record Deleted Successfully ! ⏰⏰⏰",
      data: { DeleteUser },
    });
    console.log("User Record Deleted Successfully ! ⏰⏰⏰");
  } catch (error) {
    next(error);
  }
};

// put
export const UpdateUser = async (req, res, next) => {
  // console.log(req.file.filename);
  try {
    // console.log(req.file);
    const UpdateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          "username": req.body.username,
          "name": req.body.name,
          "mobileNo": req.body.mobileNo,
          "email": req.body.email,
          "Userphoto": req.file.path,
          "password": req.body.password,
        },
      },
      { new: true }
    ); //{new: true} => showm new updated json format with new data
    res.status(200).json({
      status: 200,
      message: "User Record updated Successfully ! ⏰⏰⏰",
      data: { UpdateUser },
    });
    console.log("User Record Updated Successfully ! 🥳🥳🥳");
  } catch (error) {
    next(error);
  }
};

// get specific
export const GetSpecificUser = async (req, res, next) => {
  try {
    const GetSpecificUser = await User.findById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Get Specific User Record Successfully ! ⏰⏰⏰",
      data: { GetSpecificUser },
    });
    console.log("Get Specific User Record Successfully ! ⏰⏰⏰");
  } catch (error) {
    next(error);
  }
};

// get all users
export const GetAllUser = async (req, res, next) => {
  // const failed = true;
  // if (failed) {return next(createerror(401,"error"));}

  try {
    const Users = await User.find();
    //const Users = await User.findid("lskdjfklsj"); // For the testing of error ...
    res.status(200).json({
      status: 200,
      message: "User Record Get Successfully ! 😊😊😊",
      data: { Users },
    });
    console.log("Users Record Get Successfully ! 😊😊😊");
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};
