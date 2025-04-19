import { Song } from "../../models/song/songmodle.js";

const tranding_songs =async (req,res)=>{
  try {
    // Calculate the date 15 days ago from today
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    // Query the Song model to find songs released within the last 15 days and sort by views in descending order
    const trendingSongs = await Song.find({ releaseDate: { $gte: fifteenDaysAgo } }).sort({ views: -1 });

    // Send the sorted songs as the response
    res.status(200).json(trendingSongs);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }

}
export default  tranding_songs
