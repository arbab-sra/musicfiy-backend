import { Song } from "../../models/song/songmodle.js";

const new_release_songControlar = async (req, res) => {
  try {
    // Calculate the date 15 days ago from today
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    // Query the Song model to find songs released within the last 15 days and sort by releaseDate in descending order
    const newReleaseSongs = await Song.find({
      releaseDate: { $gte: fifteenDaysAgo },
    }).sort({ releaseDate: -1 });

    // Send the sorted songs as the response
    res.status(200).json(newReleaseSongs);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }
};

export default new_release_songControlar;
