import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { songBySearchingControllar } from "../../controlers/song/index.js";
const router = express.Router();
const songbysearchRoute = router.get(
  "/songs/allsongsearch",
  // verifyToken,
  songBySearchingControllar
);
export default songbysearchRoute;
