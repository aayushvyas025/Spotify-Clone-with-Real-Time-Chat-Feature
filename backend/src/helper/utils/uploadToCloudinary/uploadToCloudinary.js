import { cloudinary } from "../../../config/index.js";

async function uploadToCloudinary(file) {
  try {
    const upload = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });

    return upload.secure_url;
  } catch (error) {
    console.error(`Error while uploading file to cloudinary:${error?.message}`);
    throw new Error(`Error while uploading file to cloudinary`)
  }
}

export default uploadToCloudinary;
