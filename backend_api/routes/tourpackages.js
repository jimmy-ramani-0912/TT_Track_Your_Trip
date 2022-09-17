import express from "express";
import {
  createTourPackage,
  UpdateTourPackage,
  DeleteTourPackage,
  GetSpecificTourPackage,
  GetAllTourPackage,
} from "../controllers/tourpackage.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// POST TourPackage Details
router.post("/", verifyAdmin, createTourPackage);

// Put For Update TourPackage Details
router.put("/:id", verifyAdmin, UpdateTourPackage);

// delet For Delete TourPackage Details8
router.delete("/:id", verifyAdmin, DeleteTourPackage);

// get For specific TourPackage Details
router.get("/:id", GetSpecificTourPackage);

// get For all TourPackage Details
router.get("/", GetAllTourPackage);

export default router;
