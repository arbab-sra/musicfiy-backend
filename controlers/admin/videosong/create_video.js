import { deleteFile } from "../../../utils/deletefiles.js";
import { uploadToCloudinary } from "../../../utils/uplodtocloudnery.js";
import Videosong from "../../../models/videosong/videosong.js";
const createvideo = async (req, res) => {
  const { isadmin } = req.user;
  const { title, artist, songCategory, mood } = req.body;
  if (req.files.videourl === undefined || req.files.themnail === undefined) {
    if (req.files.videourl) deleteFile(req.files.videourl[0].path);
    if (req.files.themnail) deleteFile(req.files.themnail[0].path);
    return res.send("videourl and themnail are required");
  }
  const { videourl, themnail } = req.files;
  if (isadmin === false || isadmin === undefined) {
    deleteFile(themnail[0].path);
    deleteFile(videourl[0].path);
    return res.send("this route is not allowed");
  }

  if (!(title && artist && songCategory && mood)) {
    deleteFile(themnail[0].path);
    deleteFile(videourl[0].path);
    return res.send("all fields are required");
  }
  try {
    const videwSongThemnail = await uploadToCloudinary(
      themnail[0].path,
      "themnail"
    );

    const videoSongUrl = await uploadToCloudinary(
      videourl[0].path,
      "videosongs"
    );
    console.log(videoSongUrl, videwSongThemnail);
    const songdetails = {
      title,
      artist,
      songCategory,
      mood,
      videwSongThemnail,
      videoSongUrl,
    };

    const song = await Videosong.create(songdetails);
    return res.send(song);
  } catch (error) {
    if (error) {
      if (videourl) {
        deleteFile(themnail[0].path);
      }
      if (themnail) {
        deleteFile(videourl[0].path);
      }
      return console.log("error uploading to cloudinary", error.message);
    }
  }
};
export default createvideo;
