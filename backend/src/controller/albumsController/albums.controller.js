import { Constants } from "../../helper/index.js";
import { Album } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { success, notSuccess, albumMessages } = apiResponseMessages;
const {fetchAllAlbums,albumNotFound, fetchAlbumId} = albumMessages

const albumControllers = {
  getAllAlbums: async (request, response,next) => {
    try {
        const albums = await Album.find({});

        response.status(200).json({success:success, message:fetchAllAlbums, albums:albums})
        
    } catch (error) {
      console.error(`Error While Fetching Albums ${error.message}`);
      next(error)
    }
  },
  getAlbumsById: async (request, response, next) => {
    const {id} = request.params
    try {
        const album = await Album.findById(id).populate("songs"); 
        if(!album) {
            return response.status(400).json({success:notSuccess, message:albumNotFound})
        }
       response.status(200).json({success:success, message:fetchAlbumId, album})
    } catch (error) {
      console.error(`Error While Fetching Album ${error.message}`);
      next(error)
    }
  },
};
export default albumControllers;
