import cloud from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import fs from "fs";
import { deleteFile } from "./deletefiles.js";
const cloudinary = cloud.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadToCloudinary = async (
  filename,
  folderName,
  contanttyp = "auto"
) => {
  // console.log("resive image pathe",filename);
  try {
    const filePath = path.resolve("../public", filename);
    console.log(filePath);
    const response = await cloudinary.uploader.upload(
      filePath,
      {
        resource_type: contanttyp, // For audio files
        folder: folderName,
        effect: "upscale",
      },
      (error) => {
        if (error) {
          console.log(error.message);
        } else {
          // Delete the file from the server after uploading to Cloudinary
          deleteFile(filePath);
          console.log("profilepicture uploaded successfully");
        }
      }
    );
    console.log("URL is:", response.secure_url);
    return response.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
  }
};
