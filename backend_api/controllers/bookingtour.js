// import BookingTour from "../models/BookingTour.js";
import TourPackage from "../models/TourPackage.js";
import Users from "../models/Users.js";
import User from "../models/Users.js";
import Bookings from "../models/BookingTour.js";

//post booking
export const createBookingCheckout = async (req, res, next) => {
  const TourId = req.params.tourid;
  const user = (await User.findOne({ mobile: req.params.mobile })).id;
  const price = (await TourPackage.findById(TourId)).price;
  //console.log(TourId, user, price);
  const TourDetails = await TourPackage.findById(TourId);
  //console.log(TourDetails)

  const BookedTour = new Bookings({
    tour: TourId,
    user: user,
    price: price,
  });

  try {
    const SavedTourpackage = await BookedTour.save();
    try {
      await Users.findByIdAndUpdate(user, {
        // here we let/use Hotel model cuz  we add room into hotel particular hotel with hotelid
        $push: { TourPackageBooked: TourId }, // here push rooms into hotel
      });
    } catch (errors) {
      next(errors);
    }
    res.status(200).json({
      status: 200,
      message:
        "New Tour Package is Booked Successfully & Booked TourPackage Detils is Below ! 🔥🔥🔥",
      data: { SavedTourpackage, TourPackageDetails: TourDetails },
    });
    console.log("New Tour Package is Bookeds Successfully ! ❤️❤️❤️");
  } catch (error) {
    next(error);
  }
};

// delete
export const DeleteBookedTourPackage = async (req, res, next) => {
  const TourId = req.params.tourid;
  const user = (await User.findOne({ mobile: req.params.mobile })).id;

  try {
    const DeletedBookedSpecificUserTourPackage =
      await Bookings.findByIdAndDelete(req.params.id);
    try {
      await Users.findByIdAndUpdate(user, {
        // here we let/use Hotel model cuz  we add room from hotel lists
        $pull: { TourPackageBooked: TourId }, // here pull/update one unique room_id
      });
    } catch (errors) {
      next(errors);
    }
    res.status(200).json({
      status: 200,
      message:
        "Booked Tour Pacakge Record Deleted Successfully & Deleted tourPackage Detils is Below ! 🔥🔥🔥",
      data: { DeletedBookedSpecificUserTourPackage },
    });
    console.log("Booked Tour Pacakge Record Deleted Successfully ⏰⏰⏰");
  } catch (error) {
    next(error);
  }
};

// get all rooms of the hotels
export const GetAllBookedTourPacakge = async (req, res, next) => {
  try {
    const AllBookedTourPacakge = await Bookings.find();

    res.status(200).json({
      status: 200,
      message: "Rooms Detail Of All The Hotels Successfully",
      data: { AllBookedTourPacakge },
    });
    console.log("Rooms Records Of All The Hotels Get Successfully ! 😊😊😊");
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
};

// get Booked Tour Package of Specific User
export const GetSpecificUserTourBookedPackage = async (req, res, next) => {
  const user = (await User.findOne({ mobile: req.params.mobile })).id;

  try {
    const GetSpecificUserTourBookedPackage = await Bookings.find({
      user: req.params.userid,
    });

    res.status(200).json({
      status: 200,
      message: "Booked Tour Packages Of Specific USer Successfully",
      data: { GetSpecificUserTourBookedPackage },
    });
    console.log("Booked Tour Packages Record Get Successfully! 😍😍😍");
  } catch (error) {
    next(error);
  }
};
