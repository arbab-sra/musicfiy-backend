import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { new_release_songControlar } from "../../controlers/song/index.js";
const router = express.Router();
const new_release_songRoute = router.get(
  "/songs/newrelease",
//   verifyToken,
  new_release_songControlar
);
export default new_release_songRoute;
