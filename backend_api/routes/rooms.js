import express from "express";
import {
  CreateRoom,
  DeleteRoom,
  GetAllRoom,
  GetSpecificRoom,
  UpdateRoom,
  DeleteSpecificRoomOfSpecificHotel,
} from "../controllers/rooms.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST Room Details
router.post("/:hotelid", verifyAdmin, CreateRoom);

// Put For Update Room Details
router.put("/:id", verifyAdmin, UpdateRoom);

// delete For Delete All The Rooms of Hotel
router.delete("/:id/:hotelid", verifyAdmin, DeleteRoom);

// delete For Delete Specific Room of Specific Hotel
router.delete(
  "/:hotelid/:id/:roomnoid",
  verifyAdmin,
  DeleteSpecificRoomOfSpecificHotel
);

// get For All The Rooms of specific Specific Details
router.get("/:id", verifyAdmin,verifyUser, GetSpecificRoom);

// get For all Room Details
router.get("/", verifyUser, verifyAdmin, GetAllRoom);

export default router;
