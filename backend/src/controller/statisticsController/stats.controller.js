import { Constants } from "../../helper/index.js";
import { Album, Song, User } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { success, statsMessages } = apiResponseMessages;
const { fetchStats } = statsMessages;

const statsControllers = {
  getAllStats: async (_, response, next) => {
    try {
      const statsData = await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),
        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);

      const [totalSongs, totalAlbums, totalUsers, uniqueArtist] = statsData;

      response.status(200).json({
        success: success,
        message: fetchStats,
        stats: { totalSongs, totalAlbums, totalUsers, totalArtist:uniqueArtist[0]?.count || 0 },
      });
    } catch (error) {
      console.error(
        `Error While Fetching All Songs For Stats ${error?.message}`
      );
      next(error);
    }
  },
};

export default statsControllers;
