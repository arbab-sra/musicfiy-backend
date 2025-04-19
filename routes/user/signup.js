import express from "express";
import {upload} from '../../utils/multer.js'
import {signupControler} from "../../controlers/user/index.js"
const router = express.Router();
const signupRoute = router.post("/user/signup",upload,signupControler );
export default signupRoute;
