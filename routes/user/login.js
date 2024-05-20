import express from "express";
const router = express.Router();
import { loginControler } from "../../controlers/user/index.js";
const loginRoute = router.get("/user/login", loginControler);
export default loginRoute;
