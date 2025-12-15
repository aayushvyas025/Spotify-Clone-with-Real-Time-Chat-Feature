import {
  Constants,
  uploadToCloudinary,
  validationChecking,
} from "../../helper/index.js";
import { Album, Song } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { adminMessages, success } = apiResponseMessages;
const { songCreated, songDeleted, albumCreated, albumDeleted, adminChecked } =
  adminMessages;
const {
  adminValidation,
  idValidation,
  uploadSingleValidation,
  albumValidations,
} = validationChecking;
const { inputValidation, uploadFilesValidation } = adminValidation;

const adminControllers = {
  createSong: async (request, response, next) => {
    const { title, artist, duration, albumId } = request.body;
    const requestInput = { title, artist, duration, albumId };
    const uploadingFiles = { files: request.files };

    const inputErrorResponse = inputValidation(requestInput);
    if (!inputErrorResponse.success) {
      return response.status(400).json(inputErrorResponse);
    }

    const uploadFileErrorResponse = uploadFilesValidation(uploadingFiles);

    if (!uploadFileErrorResponse.success) {
      return response.status(400).json(uploadFileErrorResponse);
    }

    const audioFile = request?.files?.audioFile;
    const imageFile = request?.files?.imageFile;

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
          $push: { songs: newSong._id },
        });
      }

      response
        .status(201)
        .json({ success: success, message: songCreated, newSong });
    } catch (error) {
      console.error(`Error while creating song:${error?.message}`);
      next(error);
    }
  },
  deleteSong: async (request, response, next) => {
    const { id: songId } = request.params;
    const idErrorResponse = idValidation(songId);

    if (!idErrorResponse.success) {
      return response.status(400).json(idErrorResponse);
    }

    try {
      const song = await Song.findByIdAndDelete(songId);

      if (song.albumId) {
        await Album.findByIdAndUpdate(song.albumId, {
          $pull: { songs: song._id },
        });
      }

      response.status(200).json({ success: success, message: songDeleted });
    } catch (error) {
      console.error(`Error while deleting song:${error?.message}`);
      next(error);
    }
  },
  createAlbum: async (request, response, next) => {
    const { title, artist, releaseYear } = request.body;
    const { imageFile } = request.files;
    const requestInput = { title, artist, releaseYear };

    const uploadErrorResponse = uploadSingleValidation(imageFile);

    if (!uploadErrorResponse.success) {
      return response.status(400).json(uploadErrorResponse);
    }

    const albumErrorResponse = albumValidations(requestInput);

    if (!albumErrorResponse.success) {
      return response.status(400).json(albumErrorResponse);
    }

    try {
      const imageUrl = await uploadToCloudinary(imageFile);
      const newAlbum = new Album({
        title,
        artist,
        releaseYear,
        imageUrl,
      });

      await newAlbum.save();

      response
        .status(201)
        .json({ success: success, message: albumCreated, newAlbum });
    } catch (error) {
      console.error(`Error while creating album:${error?.message}`);
      next(error);
    }
  },
  deleteAlbum: async (request, response, next) => {
    const { id: albumId } = request.params;

    const idErrorResponse = idValidation(albumId);

    if (!idErrorResponse.success) {
      return response.status(400).json(idErrorResponse);
    }

    try {
      await Song.deleteMany({ albumId });
      await Album.findByIdAndDelete(albumId);

      response.status(200).json({ success: success, message: albumDeleted });
    } catch (error) {
      console.error(`Error while deleting album:${error?.message}`);
      next(error);
    }
  },
  checkAdmin: async (_, response, next) => {
    try {
      response
        .status(200)
        .json({ success: success, message: adminChecked, admin: true });
    } catch (error) {
      console.error(`Error while checking admin:${error?.message}`);
      next(error);
    }
  },
};

export default adminControllers;
