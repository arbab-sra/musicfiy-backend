import { User } from "../../models/user/usermodles.js";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "../../utils/uplodtocloudnery.js";
import { deleteFile } from "../../utils/deletefiles.js";
import { genrateOtp } from "../../utils/genrateotp.js";
import { sendMail } from "../../utils/sendotp.js";

const signupControler = async (req, res) => {
  const { username, email, password } = req.body;

  if (!(password && email && username)) {
    if (req.files.avatar.length > 0) {
      deleteFile(req.files.avatar[0].path);
    }
    return res.status(499).json({
      messsage: "All files must be required",
    });
  }
  try {
    const userisExist = await User.findOne({ email:email });
    console.log(userisExist);
    if (userisExist) {
      return res.status(403).json({
        messsage: "User already exists",
      });
    }
  } catch (error) {
    if (req.files.avatar) {
      deleteFile(req.files.avatar[0].path);
    }
    console.log(error.messsage);
    return res.status(500).json({ messsage: error.messsage });
  }
  const otp = genrateOtp();
  const incriptedpassword = await bcrypt.hash(password, 10);
  const userdetails = {
    username,
    email,
    password: incriptedpassword,
    otp,
    otpExpiresAt: Date.now() + 10 * 60 * 1000,
  };

  // console.log(imgurlfromclint);
  if (req.files.avatar) {
    const url = await uploadToCloudinary(
      req.files?.avatar[0]?.path,
      "profilepicture"
    );
    if (url) {
      userdetails.profilepicture = url;
    }
  }
  try {
    const newuser = await User.create(userdetails);
    await newuser.save();
    await sendMail(email, otp);
    return res.status(200).json({
      messsage: "User created is successfully and otp sent to your email",
      userpic: newuser.profilepicture,
      email: newuser.email,
      username: newuser.username,
    });
  } catch (error) {
    console.log(error.messsage);
    if (req.files.avatar) {
      deleteFile(req.files.avatar[0].path);
    }
    return res.status(500).json({ messsage: error.messsage });
  }
};
export default signupControler;
