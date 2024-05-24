const logoutController = async (req, res) => {
  return res.cookie("token", "", { httpOnly: true, secure: true }).send("logout successfully");
};
export default logoutController;
