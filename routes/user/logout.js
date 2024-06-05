import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { logoutController } from "../../controlers/user/index.js";
const router = express.Router();
const logoutRoute = router.get("/user/logout",  logoutController);
export default logoutRoute;
