import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { singlevideosongControllar } from "../../controlers/song/index.js";
const router = express.Router();
const singlesongRoute = router.get(
  "/songs/singlevideosong",
  // verifyToken,
  singlevideosongControllar
);
export default singlesongRoute;
