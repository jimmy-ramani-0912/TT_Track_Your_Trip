import express from "express";
import { Login, Register ,ResetPassword ,logout} from "../controllers/auth.js";

const router = express.Router();

// Post/Register new user
router.post("/register",Register)

// Post login user
router.post("/login",Login)

// Post Forgot password
router.post("/resetpassword/:token",ResetPassword)

// Post LogOut account
router.get("/logout",logout)

// Post Update password
// router.patch("/updatepassword/",updatePassword)

export default router;