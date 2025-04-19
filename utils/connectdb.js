import mongoose from "mongoose";

const connectdb = () => {
  try {
    mongoose
      .connect(process.env.MONGOOSE_CONNECT_URI)
      .then(() => console.log("successfully connect to the database"))
      .catch((err) => console.log("fail to connect to the databasem" + err));
  } catch (error) {
    console.log("Error connecting to Mongoose: " + error);
  }
};
export default connectdb;
