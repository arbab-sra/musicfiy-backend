export const checkIsAdmin = async (req, res, next) => {
  const { isadmin } = req.user;
  if (isadmin === false || isadmin === undefined) {
    return res.status(404).send("this route is not allowed");
  }
  next();
};
