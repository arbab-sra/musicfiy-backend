import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requred: true,
      unique: true,
    },
    email: {
      type: String,
      requrid: true,
    },
    password: {
      type: String,
    },
    profilepicture: {
      type: String,
      default: "",
    },

    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Song,
      },
    ],
    history: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: Song,
      },
    ],
    mostplayedsong: {
      type: Array,
    },
  },

  { timestap: true }
);
