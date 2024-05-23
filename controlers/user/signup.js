import { User } from "../../models/user/usermodles.js";
import bcrypt from "bcrypt";
import { genratToken } from "../../utils/jwtsigntoken.js";
import { uploadToCloudinary } from "../../utils/uplodtocloudnery.js";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const signupControler = async (req, res) => {
  const { username, email, password } = req.body;
  const imgurlfromclint =
    req.files && req.files.avatar[0] && req.files.avatar[0].filename;
  if (!(email && password && username)) {
    return res.status(499).json({
      messsage: "All files must be required",
    });
  }
  try {
    const userisExist = await User.findOne({ email });
    if (userisExist) {
      return res.status(200).json({
        messsage: "User already exists",
      });
    }
  } catch (error) {
    console.log(error.messsage);
    return res.status(500).json({ messsage: error.messsage });
  }
  const incriptedpassword = await bcrypt.hash(password, 10);
  const userdetails = {
    username,
    email,
    password: incriptedpassword,
  };
  console.log(imgurlfromclint);
  if (req.files) {
    const filePath = path.resolve(__dirname, "../../public", imgurlfromclint );
    const url = await uploadToCloudinary(filePath ,"profilepicture");
    if (url) {
      userdetails.profilepicture = url;
    }
  }
  console.log(userdetails);
  try {
    const newuser = await User.create(userdetails);
    await newuser.save();
    const token = genratToken(newuser._id);
    res.cookie("token", token, { httpOnly: true, secure: true });
  } catch (error) {
    console.log(error.messsage);
    return res.status(500).json({ messsage: error.messsage });
  }
  return res.status(200).json({
    messsage: "User created is successfully",
  });
};
export default signupControler;
