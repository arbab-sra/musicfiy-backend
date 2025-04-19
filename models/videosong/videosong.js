import mongoose from "mongoose";

const VideoSong = new mongoose.Schema(
  {
    videoSongUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    songCategory: {
      type: String,
      required: true,
    },
    videwSongThemnail: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timeseries: true }
);

const Videosong = mongoose.model("Videosong", VideoSong)
export default Videosong