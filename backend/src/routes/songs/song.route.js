import express from "express";
import { apiRoutes } from "../../helper/index.js";
import { songControllers } from "../../controller/index.js";
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import requireAdmin from "../../middleware/adminMiddleware/admin.middleware.js";

const { songs } = apiRoutes;
const {
  GET_SONGS,
  GET_FEATURED_SONGS,
  GET_MADE_FOR_YOU_SONGS,
  GET_TRENDING_SONGS,
} = songs;
const { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } =
  songControllers;

const router = express.Router();

router.get(GET_SONGS, protectedRoute, requireAdmin, getAllSongs);
router.get(GET_FEATURED_SONGS, getFeaturedSongs);
router.get(GET_MADE_FOR_YOU_SONGS, getMadeForYouSongs);
router.get(GET_TRENDING_SONGS, getTrendingSongs);

export default router;
