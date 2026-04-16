import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new Error("Token is not valid");
    }

    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("user not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("middleware error:" + err.message);
  }
};

export default isAuthenticated;
