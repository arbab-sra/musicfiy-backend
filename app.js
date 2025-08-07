import dotenv from "dotenv";
dotenv.config();
//imports
import express from "express";
import cors from "cors";
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
import { create_songRoute, videosongRoute } from "./routes/admin/song/index.js";
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
  video_songRoute,
  single_videosongRoute,
} from "./routes/song/index.js";
import tranding_songsRoute from "./routes/song/trandingRoute.js";
import veryfyuserRoute from "./routes/user/veryfyuserRoute.js";

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
const furl = process.env.FRONTEND_URL
const allowedOrigins = ['http://www.arbab.fun'];
allowedOrigins.push(furl)
const corsOptions = {
  origin: function (origin, callback) {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }, // your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  return res.send("hello world");
});
//all users routes
app.use("/api", loginRoute);
app.use("/api", signupRoute);
app.use("/api", profileRoute);
app.use("/api", updateprofileRoute);
app.use("/api", logoutRoute);
app.use("/api", veryfyuserRoute);
//cors

//all admin routes
app.use("/api", create_songRoute);
app.use("/api", videosongRoute);

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
app.use("/api", single_videosongRoute);
app.use("/api", video_songRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`.gray.america);
});



