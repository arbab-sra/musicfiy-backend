import express from "express";
const router = express.Router();
import { upload } from "../../../utils/multer.js";
import { createvideo} from "../../../controlers/admin/videosong/index.js"
import {verifyToken} from "../../../middleware/userverfy.js"
const createvideo_song = router.post(
  "/admin/createvideosong",
  upload,
  verifyToken,
  createvideo
);
export default createvideo_song;
