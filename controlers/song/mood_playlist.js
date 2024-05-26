import { Song } from "../../models/song/songmodle.js";

const mood_playlistControlar = async (req, res) => {
  try {
    // Use aggregation pipeline to group songs by mood
    const songsByMood = await Song.aggregate([
      {
        $group: {
          _id: "$mood",
          songs: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          _id: 0,
          mood: "$_id",
          songs: 1,
        },
      },
    ]);

    // Send the grouped songs as the response
    res.status(200).json(songsByMood);
  } catch (error) {
    // Handle any errors
    console.log(error.message);
    res.status(500).json({ message: "Server Error", error });
  }
};
export default mood_playlistControlar;
