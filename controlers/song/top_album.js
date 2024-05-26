import { Song } from "../../models/song/songmodle.js";

const top_albumControllar = async (req, res) => {
  try {
    // Use aggregation pipeline to sort songs by views and group by artist
    const popularArtistsWithSongs = await Song.aggregate([
      { $sort: { views: -1 } }, // Sort songs by views in descending order
      {
        $group: {
          _id: "$artist",
          totalViews: { $sum: "$views" },
          songs: { $push: "$$ROOT" },
        },
      },
      { $sort: { totalViews: -1 } }, // Sort artists by total views in descending order
    ]);

    // Send the sorted artists with their songs as the response
    res.status(200).json(popularArtistsWithSongs);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }
};
export default top_albumControllar;
