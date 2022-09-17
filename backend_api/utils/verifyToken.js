import jwt from "jsonwebtoken";
import { createerror } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createerror(401, "U R Not Authenticated Or Not Token! 😒😒😒"));
  }

  jwt.verify(token, process.env.JWT, (err, GetUser) => {
    if (err) return next(createerror(403, "Token Is Not Valid! 😫😫😫"));
    req.GetUser = GetUser;
    next()
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next,() => {
    if (req.GetUser.id === req.params.id || req.GetUser.isAdmin) { //verify both users - simple user and admin 
      next();
    } else {    
        return next(createerror(403, "You Are Not Authorized Of User! 😢😢😢"));
    }
  });
};


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res,next ,() => {
      // console.log(req.GetUser.isAdmin + " 222222222222222222222222222222");
      if (req.GetUser.isAdmin) {
        next();
      } else {  
          return next(createerror(403, "You Are Not Authorized of Admin! 😢😢😢"));
      }
    });
  };