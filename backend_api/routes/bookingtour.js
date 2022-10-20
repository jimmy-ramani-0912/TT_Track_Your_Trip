import express from "express";
import {
  createBookingCheckout,
  DeleteBookedTourPackage,
  GetAllBookedTourPacakge,
  GetSpecificUserTourBookedPackage,
} from "../controllers/bookingtour.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST Booking Tour
router.post("/:tourid", createBookingCheckout);

// delete Booked tour
router.delete("/:id/:tourid", DeleteBookedTourPackage);

//get Booked Tour Packages of Specific User
router.get(
  "/:userid",
  verifyAdmin,
  verifyUser,
  GetSpecificUserTourBookedPackage
);

// get For all Room Details
router.get("/", verifyAdmin, GetAllBookedTourPacakge);

export default router;
