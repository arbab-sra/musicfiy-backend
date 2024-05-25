import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { tranding_songs } from "../../controlers/song/index.js";
const router = express.Router();
const tranding_songsRoute = router.get(
  "/songs/tranding",
  verifyToken,
  tranding_songs
);
export default tranding_songsRoute;
