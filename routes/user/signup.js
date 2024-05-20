import express from "express";
import {signupControler} from "../../controlers/user/index.js"
const router = express.Router();
const signupRoute = router.get("/user/signup",signupControler );
export default signupRoute;
