const mood_playlistControlar= async (req, res )=>{
  return res.send("mood_playlistControlar")
}
export default  mood_playlistControlar


// // Define a route to get songs grouped by mood
// app.get("/songs/by-mood", async (req, res) => {
//     try {
//       // Use aggregation pipeline to group songs by mood
//       const songsByMood = await Song.aggregate([
//         {
//           $group: {
//             _id: "$mood",
//             songs: { $push: "$$ROOT" },
//           },
//         },
//         {
//           $project: {
//             _id: 0,
//             mood: "$_id",
//             songs: 1,
//           },
//         },
//       ]);
  
//       // Send the grouped songs as the response
//       res.status(200).json(songsByMood);
//     } catch (error) {
//       // Handle any errors
//       res.status(500).json({ message: "Server Error", error });
//     }
//   });