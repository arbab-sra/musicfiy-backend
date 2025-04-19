const logoutController = async (req, res) => {
  try {
    
    console.log("logout");
    return res
      .cookie("token", "", { httpOnly: true })
      .send("logout successfully");
  } catch (error) {
    return console.log(error.message);
  }
};
export default logoutController;
