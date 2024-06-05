const profileControler = (req, res) => {
  const userprofile = req.user;
  console.log(userprofile);
  if (userprofile) {
    return res.send(userprofile);
  }
  // try {

  // } catch (error) {
  //   return console.log(error.message);
  // }
};
export default profileControler;
