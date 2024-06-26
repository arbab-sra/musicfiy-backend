import express from "express";
import { verifyToken } from "../../middleware/userverfy.js";
import { top_artiestsControllar } from "../../controlers/song/index.js";
const router = express.Router();
const top_artiestsRoute = router.get(
  "/songs/topartiest",
  // verifyToken,
  top_artiestsControllar
);
export default top_artiestsRoute;
