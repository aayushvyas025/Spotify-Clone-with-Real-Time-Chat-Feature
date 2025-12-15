import { Constants } from "../../helper/index.js";
import { Song } from "../../model/index.js";

const { apiResponseMessages, success } = Constants;
const { songMessages } = apiResponseMessages;
const {
  fetchAllSongs,
  songNotFound,
  trendingSongs,
  madeForYouSongs,
  featuredSongs
} = songMessages;

const songControllers = {
  getAllSongs: async (_, response, next) => {
    try {
      const songs = await Song.find({}).sort({ createdAt: -1 });

      response
        .status(200)
        .json({ success: success, message: fetchAllSongs, songs });
    } catch (error) {
      console.error(`Error While Fetching All Songs ${error?.message}`);
      next(error);
    }
  },
  getFeaturedSongs: async (_, response, next) => {
    try {
      const songs = await Song.aggregate([
        {
          $sample: { size: 6 },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            artist: 1,
            audioUrl: 1,
            imageUrl: 1,
          },
        },
      ]);

      response
        .status(200)
        .json({ success: success, message: featuredSongs, songs });
    } catch (error) {
      console.error(`Error While Fetching Featured Songs ${error?.message}`);
      next(error);
    }
  },
  getMadeForYouSongs: async (_, response, next) => {

    try {
         const songs = await Song.aggregate([
        {
          $sample: { size: 4},
        },
        {
          $project: {
            _id: 1,
            title: 1,
            artist: 1,
            audioUrl: 1,
            imageUrl: 1,
          },
        },
      ]);

      response
        .status(200)
        .json({ success: success, message: madeForYouSongs, songs });
    } catch (error) {
      console.error(
        `Error While Fetching Made For You Songs ${error?.message}`
      );
      next(error);
    }
  },
  getTrendingSongs: async (_, response, next) => {
    try {
          const songs = await Song.aggregate([
        {
          $sample: { size: 4},
        },
        {
          $project: {
            _id: 1,
            title: 1,
            artist: 1,
            audioUrl: 1,
            imageUrl: 1,
          },
        },
      ]);

      response
        .status(200)
        .json({ success: success, message: trendingSongs, songs });
    } catch (error) {
      console.error(`Error While Fetching Trending Songs ${error?.message}`);
      next(error);
    }
  },
};

export default songControllers;
