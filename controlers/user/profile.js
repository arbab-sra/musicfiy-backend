const profileControler = (req, res) => {
  const userprofile = req.user;
  if (userprofile) {
    return res.send(userprofile);
  }
};
export default profileControler;
 