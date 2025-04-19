import express from "express";
import { upload } from "../../../utils/multer.js";
import { create_song } from "../../../controlers/admin/song/index.js";
import { verifyToken } from "../../../middleware/userverfy.js";
import { checkIsAdmin } from "../../../utils/adminprotection.js";
const router = express.Router();
const create_songRoute = router.post(
  "/admin/createsong",
  verifyToken,
  checkIsAdmin,
  upload,
  create_song
);
export default create_songRoute;
