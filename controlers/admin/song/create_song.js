import { Song } from "../../../models/song/songmodle.js";
import { deleteFile } from "../../../utils/deletefiles.js";
import { uploadToCloudinary } from "../../../utils/uplodtocloudnery.js";

const create_song = async (req, res) => {
  const { themnail, song } = req.files;
  const { title, artist, songCategory, mood } = req.body;

  if (!themnail || !song) {
    if (song) deleteFile(song[0].path);
    if (themnail) deleteFile(themnail[0].path);
    console.log(
      `sended only ${!themnail ? "song" : "themnail"} so that ${
        !themnail ? "song" : "themnail"
      } is deleted successfully`
    );

    return res
      .status(404)
      .send({ message: `${!themnail ? "themnail" : "song"} is required` });
  }
  const requiredFields = [
    { field: title, message: "Title is required" },
    { field: artist, message: "Artist is required" },
    { field: songCategory, message: "Song category is required" },
    { field: mood, message: "Mood is required" },
  ];

  for (const { field, message } of requiredFields) {
    if (!field) {
      return res.status(400).send({ message });
    }
  }
  const songdetails = {
    title,
    artist,
    songCategory,
    mood,
  };
  try {
    const audiofilename = song[0].path;
    const audioUrl = await uploadToCloudinary(audiofilename, "audio");
    if (audioUrl) {
      songdetails.url = audioUrl;
    }
    const themnailurl = themnail[0].path;
    const converUrl = await uploadToCloudinary(themnailurl, "themnail");
    if (converUrl) {
      songdetails.themnail = converUrl;
    }
  } catch (error) {
    console.log(error.message);
  }
  try {
    const newsong = await Song.create(songdetails);
    await newsong.save();
    return res.status(200).send("song created successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default create_song;
