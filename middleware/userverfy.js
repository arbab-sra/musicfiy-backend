import jwt from "jsonwebtoken";
import { User } from "../models/user/usermodles.js";
export const verifyToken = async (req, res, next) => {
  console.log(req.headers);
  if (!req.headers?.authorization) {
    return res.status(401).json({
      message: "Invalid token login ",
    });
  }
  const token = req.headers?.authorization.toString();
// console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Invalid token login ",
    });
  }
  try {
    const { id } = jwt.verify(token, process.env.TWT_TOKEN_KEY);

    if (id) {
      const user = await User.findById(id);
      if (user) {
        req.user = user;
      }
    }
    next();
  } catch (error) {
    console.log('error in jwt verify',error.message);

    return res.status(401).json({
      message: "Invalid token login ",
  })}
};
