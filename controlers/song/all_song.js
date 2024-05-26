import {Song} from '../../models/song/songmodle.js'
const all_songsControlar = async (req, res) => {
  try {
    const allSongs = await Song.find()
    res.send(allSongs)
  } catch (error) {
    return console.log(error.message);
  }
};
export default all_songsControlar;
