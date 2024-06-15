import { Song } from "../../models/song/songmodle.js";

const weekly_top_songs = async (req, res) => {
  try {
    
    // const severnday = new Date();
    // severnday.setDate(severnday.getDate() - 8);
    // Query the Song model and sort by views in descending order
    const songs = await  Song.find().sort({ views: -1 });

    // Send the sorted songs as the response
    res.status(200).json(songs);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }
};
export default weekly_top_songs;
