import multer from "multer";
export const uploadfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public");
  },

  destination: function (req, file, cb) {},
});
