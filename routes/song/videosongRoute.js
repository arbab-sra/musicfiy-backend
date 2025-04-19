import express from "express";
const router = express.Router();
import { video_song } from "../../controlers/song/index.js";
const video_songRoute = router.get("/songs/videosong", video_song);
export default video_songRoute;
