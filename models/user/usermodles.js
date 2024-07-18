import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    isadmin: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    otp: {
      type: Number,
      required: [true, "OTP is required"],
    },
    verified: { type: Boolean, default: false },
    otpExpiresAt: { type: Date },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilepicture: {
      type: String,
      default: "https://avatar.iran.liara.run/public",
    },
    likedSongs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    recentlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    history: [
      {
        song: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Song",
        },
        playedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    mostPlayedSongs: [
      {
        song: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Song",
        },
        playCount: {
          type: Number,
          default: 0,
        },
      },
    ],
    playlists: [
      {
        name: { type: String },
        songs: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
// export { User };
