import { User } from "../../models/user/usermodles.js";
import { genratToken } from "../../utils/jwtsigntoken.js";
const veryfyuser = async (req, res) => {
  const { otp, email } = req.body;

  if (!otp || !email) {
    return res.status(400).json({
      message: "otp is required",
    });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    if (user.otp == otp && user.otpExpiresAt > Date.now()) {
      user.verified = true;
      await user.save();
      const token = genratToken(user._id);
      return res.status(200).json({
        token,
        message: "user verified successfully",
      });
    } else {
      return res.status(400).json({
        message: "invalid otp",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default veryfyuser;
