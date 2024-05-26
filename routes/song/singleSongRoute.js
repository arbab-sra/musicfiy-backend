import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { singlesongControllar } from "../../controlers/song/index.js";
const router = express.Router();
const singlesongRoute = router.get(
  "/songs/singlesong",
  verifyToken,
  singlesongControllar
);
export default singlesongRoute;
