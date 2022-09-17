import express from "express";
import { createHotel, DeleteHotel, GetAllHotel, GetSpecificHotel, UpdateHotel } from "../controllers/hotels.js";
import { verifyAdmin, verifyToken ,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST Hotel Details
router.post("/",verifyAdmin,createHotel);

// Put For Update Hotel Details
router.put("/:id",verifyAdmin,UpdateHotel);

// delet For Delete Hotel Details
router.delete("/:id",verifyAdmin, DeleteHotel);

// get For specific hotel Details
router.get("/:id", GetSpecificHotel);

// get For all Hotel Details
router.get("/", GetAllHotel);

export default router;
