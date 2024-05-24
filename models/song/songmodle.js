import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,

      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    artist: {
      type: String,
      required: [true, "Singer is required"],
    },
    songCategory: {
      type: String,
      required: [true, " song category is required"],
    },
    mood: {
      type: String,
      required: [true, "song mood is required"],
    },
    views: {
      type: Number,
      default: 0,
    },
    themnail: {
      type: String,
      required: [true, "The theme is required"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
    },
    duration: {
      type: Number, // duration in seconds
      // required: true,
    },
    releaseDate: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);
export { Song };
