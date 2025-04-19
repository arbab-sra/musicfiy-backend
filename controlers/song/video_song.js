import Videosong from "../../models/videosong/videosong.js";

const VideoSong = async (req, res) => {
  // return res.send("success")
  try {
    const allsong = await Videosong.find({})
    return res.send(allsong);
  } catch (error) {
    console.log("error in videosong", error.message);
  }
};

export default VideoSong;
