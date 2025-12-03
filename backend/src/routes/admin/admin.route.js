import express from "express";
import { apiRoutes } from "../../helper/index.js";
import { adminControllers } from "../../controller/index.js";
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import requireAdmin from "../../middleware/adminMiddleware/admin.middleware.js";

const { admin } = apiRoutes;
const { CREATE_SONGS, DELETE_SONGS,CREATE_ALBUMS,DELETE_ALBUMS } = admin;
const { createSong, deleteSong, createAlbum,deleteAlbum} = adminControllers;



const router = express.Router();

router.post(CREATE_SONGS, protectedRoute, requireAdmin, createSong);
router.delete(DELETE_SONGS, protectedRoute, requireAdmin, deleteSong);
router.post(CREATE_ALBUMS,protectedRoute, requireAdmin,createAlbum);
router.delete(DELETE_ALBUMS,protectedRoute,requireAdmin,deleteAlbum);

export default router;
