import dotenv from "dotenv";
dotenv.config();
//imports
import express from "express";
import path from "path";
import colors from "colors";
import {
  loginRoute,
  logoutRoute,
  profileRoute,
  signupRoute,
  updateprofileRoute,
} from "./routes/user/index.js";
import connectdb from "./utils/connectdb.js";
import cookieParser from "cookie-parser";
import { create_songRoute } from "./routes/admin/song/index.js";
import {
  all_songsControlar,
  mood_playlistRoute,
  new_release_songRoute,
  popular_songsRoute,
  singlesongRoute,
  songbysearchRoute,
  top_albumRoute,
  top_artiestsRoute,
  weekly_top_songsRoute,
} from "./routes/song/index.js";
import tranding_songsRoute from "./routes/song/trandingRoute.js";

//middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve("public")));
app.use(cookieParser());
//configure
connectdb();
const port = process.env.PORT || 8080;
// all routes

app.get("/", (req, res) => {
  return res.send("hello world");
});
//all users routes
app.use("/api", loginRoute);
app.use("/api", signupRoute);
app.use("/api", profileRoute);
app.use("/api", updateprofileRoute);
app.use("/api", logoutRoute);

//all admin routes
app.use("/api", create_songRoute);

// songs route
app.use("/api", all_songsControlar);
app.use("/api", mood_playlistRoute);
app.use("/api", new_release_songRoute);
app.use("/api", popular_songsRoute);
app.use("/api", top_albumRoute);
app.use("/api", top_artiestsRoute);
app.use("/api", tranding_songsRoute);
app.use("/api", weekly_top_songsRoute);
app.use("/api", songbysearchRoute);
app.use("/api", singlesongRoute);

app.listen(port, () => {
  console.log(
    `server is running url = ${process.env.SERVER_URL}${port}`.gray.america
  );
});
