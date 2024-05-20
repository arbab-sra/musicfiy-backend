import express from "express";
import {profileControler} from "../../controlers/user/index.js"
const router = express.Router();
const profileRoute = router.get("/user/profile", profileControler);
export default profileRoute;
