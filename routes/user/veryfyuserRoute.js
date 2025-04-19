import express from "express";
import veryfyuser from "../../controlers/user/veryfyuser.js";

const router = express.Router();
const veryfyuserRoute = router.post("/user/veryfyuser", veryfyuser);
export default veryfyuserRoute;
