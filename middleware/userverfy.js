import jwt from "jsonwebtoken";
import { User } from "../models/user/usermodles.js";
export const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({
      message: "Invalid token login ",
    });
  }
  const { id } = jwt.verify(token, process.env.TWT_TOKEN_KEY);

  if (id) {
    const user = await User.findById({ _id: id });
    if (user) {
      req.user = user;
    }
  }
  next();
};
