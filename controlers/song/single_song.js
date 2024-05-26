import { Song } from "../../models/song/songmodle.js";
const singlesongControllar = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.send("id is required");

  try {
    const { views } = await Song.findById({ _id: id });
    const song = await Song.findByIdAndUpdate(
      { _id: id },
      { views: views + 1 }
    );
    if (!song) return res.send("Song not found in database from  this song id");

    return res.send(song);
  } catch (error) {
    console.log(+error.message);
    return res.send(error.message);
  }
};
export default singlesongControllar;
