import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { mood_playlistControlar } from "../../controlers/song/index.js";
const router = express.Router();
const mood_playlistRoute = router.get(
  "/songs/moodplaylist",
  // verifyToken,
  mood_playlistControlar
);
export default mood_playlistRoute;
