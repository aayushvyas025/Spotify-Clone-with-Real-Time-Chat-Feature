import { request } from "express";
import { Constants, uploadToCloudinary } from "../../helper/index.js";
import { Album, Song } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { adminMessages, allFieldsRequired } = apiResponseMessages;
const { requiredUploadFiles, songCreated } = adminMessages;

const adminControllers = {
  createSong: async (request, response, next) => {
    const { title, artist, duration, albumId } = request.body;

    if (!title || !artist || !duration || !albumId) {
      return response
        .status(400)
        .json({ success: false, message: allFieldsRequired });
    }

    if (
      !request?.file ||
      !request?.file?.audioFile ||
      !request?.file?.imageFile
    ) {
      return response
        .status(400)
        .json({ success: false, message: requiredUploadFiles });
    }

    const audioFile = request?.file?.audioFile;
    const imageFile = request?.file?.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const newSong = new Song({
      title,
      artist,
      duration,
      audioUrl,
      imageUrl,
      albumId: albumId || null,
    });

    try {
      await newSong.save();

      if (albumId) {
        await Album.findByIdAndUpdate(albumId, {
          $push: { songs: newSong?._id },
        });
      }

      response
        .status(201)
        .json({ success: true, message: songCreated, newSong });
    } catch (error) {
      console.error(`Error while creating song:${error?.message}`);
      next(error);
    }
  },
  deleteSong:async(request,response,next) => {
    try {
      
      
    } catch (error) {
      console.error(`Error while deleting song:${error?.message}`);
      next(error)
    }
  }
};

export default adminControllers;
