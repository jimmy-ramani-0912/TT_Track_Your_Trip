import express from "express";
import {
  createBookingCheckout,
  DeleteBookedTourPackage,
  GetAllBookedTourPacakge,
  GetSpecificUserTourBookedPackage,
} from "../controllers/bookingtour.js";

const router = express.Router();

// POST Booking Tour
router.post("/:tourid", createBookingCheckout);

// delete Booked tour
router.delete("/:id/:tourid", DeleteBookedTourPackage);

//get Booked Tour Packages of Specific User
router.get("/:userid", GetSpecificUserTourBookedPackage);

// get For all Room Details
router.get("/", GetAllBookedTourPacakge);

export default router;
