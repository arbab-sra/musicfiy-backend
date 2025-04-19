import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { popular_songsControllar } from "../../controlers/song/index.js";
const router = express.Router();
const popular_songsRoute = router.get(
  "/songs/popular",
//   verifyToken,
  popular_songsControllar
);
export default popular_songsRoute;
