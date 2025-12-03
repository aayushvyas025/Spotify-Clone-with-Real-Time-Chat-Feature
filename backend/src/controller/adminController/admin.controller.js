import { Constants, uploadToCloudinary } from "../../helper/index.js";
import { Album, Song } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { adminMessages, allFieldsRequired,success,notSuccess,requiredUploadFiles } = apiResponseMessages;
const { songCreated,songDeleted,albumCreated, albumDeleted,adminChecked } = adminMessages;

const adminControllers = {
  createSong: async (request, response, next) => {
    const { title, artist, duration, albumId } = request.body;

    if (!title || !artist || !duration || !albumId) {
      return response
        .status(400)
        .json({ success:notSuccess, message: allFieldsRequired });
    }

    if (
      !request?.file ||
      !request?.file?.audioFile ||
      !request?.file?.imageFile
    ) {
      return response
        .status(400)
        .json({ success: notSuccess, message: requiredUploadFiles });
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
        .json({ success:success, message: songCreated, newSong });
    } catch (error) {
      console.error(`Error while creating song:${error?.message}`);
      next(error);
    }
  },
  deleteSong:async(request,response,next) => {
    const {id} = request.params
    try {
      const song = await Song.findByIdAndDelete({id});  
      if(song.albumId) {
        await Album.findByIdAndDelete(song.albumId, {
          $pull:{songs:song?._id}
        })
      }
      
    response.status(200).json({success:success, message:songDeleted})      
    } catch (error) {
      console.error(`Error while deleting song:${error?.message}`);
      next(error)
    }
  },
  createAlbum:async(request, response,next) => {
    const {title, artist,releaseYear} = request.body;
    const {imageFile} = request.files
   
    if(!request.files || !imageFile) {
     return response.status(400).json({success:notSuccess, message:requiredUploadFiles});
    }
   
    if(!title || !artist || !releaseYear) {
      return response.status(400).json({success:notSuccess, message:allFieldsRequired})
    }

  const imageUrl = await uploadToCloudinary(imageFile);
   const newAlbum = await Album({
    title,
    artist,
    releaseYear,
    imageUrl
   })
    try {
      await newAlbum.save();

      response.status(201),json({success:success, message:albumCreated,newAlbum})
    } catch (error) {
      console.error(`Error while creating album:${error?.message}`);
      next(error) 
    }
  },
  deleteAlbum:async(request,response,next) =>{
    const {id} = request.params; 

    try {
      await Song.deleteMany({albumId:id});
      await Album.findByIdAndDelete(id);

      response.status(200).json({success:success, message:albumDeleted})
      
    } catch (error) {
      console.error(`Error while deleting album:${error?.message}`);
      next(error)
    }
  },
  checkAdmin:async(request, response,next) => {
    try {
      response.status(200).json({success:success, message:adminChecked,admin:true})
      
    } catch (error) {
      console.error(`Error while checking admin:${error?.message}`); 
      next(error)
    }
  }

};

export default adminControllers;
