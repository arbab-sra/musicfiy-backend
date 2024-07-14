import VideoSong from "../../models/videosong/videosong.js";
const single_videosong = async (req, res) => {
  const { id } = req.query;
  if (!id) return res.send("id is required");

  try {
    const result = await VideoSong.findByIdAndUpdate(
      { _id: id },
      { $inc: { views: 1 } },
      { new: true }
    );

    // Fetch the updated song

    return res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send(error.message);
  }
};
export default single_videosong;
