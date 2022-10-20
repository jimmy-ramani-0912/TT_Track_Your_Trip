import express from "express";
import { Login, Register, ResetPassword, logout } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Post/Register new user
router.post("/register", Register);

// Post login user
router.post("/login", Login);

// Post Forgot password
router.post("/resetpassword/:token", verifyAdmin, verifyUser, ResetPassword);

// Post LogOut account
router.get("/logout/:token", verifyAdmin, verifyUser, logout);

// Post Update password
// router.patch("/updatepassword/",updatePassword)

export default router;
