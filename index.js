import dotenv from "dotenv";
dotenv.config();
//imports
import express from "express";
import colors from "colors";
import { loginRoute, profileRoute, signupRoute } from "./routes/user/index.js";



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 8080;
// all routes

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.use("/api", loginRoute);
app.use("/api", signupRoute);
app.use("/api", profileRoute);

app.listen(port, () => {
  console.log(
    `server is running url = ${process.env.SERVER_URL}${port}`.gray
  );
});
