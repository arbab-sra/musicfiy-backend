import{Song} from '../../models/song/songmodle.js'

const popular_songsControllar = async (req, res) => {
  try {
    // Query the Song model and sort by views in descending order
    const songs = await Song.find().sort({ views: -1 });

    // Send the sorted songs as the response
    res.status(200).json(songs);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server Error", error });
  }
};
export default popular_songsControllar;

