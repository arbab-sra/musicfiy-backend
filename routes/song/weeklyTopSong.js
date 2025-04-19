import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { weekly_top_songs } from "../../controlers/song/index.js";
const router = express.Router();
const weekly_top_songsRoute = router.get(
  "/songs/weeklytopsong",
  // verifyToken,
  weekly_top_songs
);
export default weekly_top_songsRoute;
