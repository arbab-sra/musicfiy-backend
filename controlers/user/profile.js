const profileControler = (req, res) => {
  const userprofile = req.user;
  if (userprofile) {
    return res.send(userprofile);
  }
  try {
    
  } catch (error) {
    return console.log(error.message);
  }
};
export default profileControler;
 