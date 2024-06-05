import { User } from "../../models/user/usermodles.js";
import bcrypt from "bcrypt";
import { genratToken } from "../../utils/jwtsigntoken.js";
import { uploadToCloudinary } from "../../utils/uplodtocloudnery.js";
import { deleteFile } from "../../utils/deletefiles.js";

const signupControler = async (req, res) => {
  const { username, email, password } = req.body;

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
  console.log(userdetails);
  try {
    const newuser = await User.create(userdetails);
    await newuser.save();
    const token = genratToken(newuser._id);
    return res.status(200).json({
      token: token,
      messsage: "User created is successfully",
      userpic: newuser.profilepicture,
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
