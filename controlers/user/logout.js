const logoutController = async (req, res) => {
  try {
    return res.cookie("token", "", { httpOnly: true, secure: true }).send("logout successfully");
  } catch (error) {
    return console.log(error.message);
  }
};
export default logoutController;
