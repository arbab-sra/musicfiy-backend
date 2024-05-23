import express from "express";
import {profileControler} from "../../controlers/user/index.js"
import { verifyToken } from "../../middleware/userverfy.js";
const router = express.Router();
const profileRoute = router.get("/user/profile", verifyToken ,profileControler);
export default profileRoute;
