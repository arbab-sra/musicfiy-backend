import express from "express";
const router = express.Router();
import { loginControler } from "../../controlers/user/index.js";
const loginRoute = router.post("/user/login", loginControler);
export default loginRoute;
