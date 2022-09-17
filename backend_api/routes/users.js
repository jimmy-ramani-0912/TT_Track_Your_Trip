import express from "express";
import { DeleteUser, GetAllUser, GetSpecificUser, UpdateUser } from "../controllers/Users.js";
import { verifyAdmin, verifyToken ,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req, res,next) => {
//     res.send("Hello User , You Are Logged In ...")
// })

// router.get("/checkuser/:id", verifyUser ,(req, res,next) => { 
//     res.send("Hello User , You Are Logged In As User & Now You Can Delete Your Account... 😓😓😓")
// })

// router.get("/checkadmin/:id", verifyAdmin ,(req, res,next) => {
//     res.send("Hello Admin , You Are Logged In As Admin & Now You Have All The Access... 🥳🥳🥳")
// })

// Put For Update User Details
router.put("/:id",verifyUser,UpdateUser); 

// delet For Delete User Details
router.delete("/:id",verifyUser, DeleteUser);

// get For specific User Details
router.get("/:id", verifyUser,verifyAdmin,GetSpecificUser);

// get For all User Details
router.get("/",verifyAdmin ,GetAllUser);

export default router;
