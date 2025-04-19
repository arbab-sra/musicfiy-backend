import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { top_albumControllar } from "../../controlers/song/index.js";
const router = express.Router();
const top_albumRoute = router.get(
  "/songs/topalbum",
  // verifyToken,
  top_albumControllar
);
export default top_albumRoute;
