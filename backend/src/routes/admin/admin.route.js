import express from "express";
import { apiRoutes } from "../../helper/index.js";
import { adminControllers } from "../../controller/index.js";
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import requireAdmin from "../../middleware/adminMiddleware/admin.middleware.js";

const { admin } = apiRoutes;
const { CREATE_SONGS, DELETE_SONGS,CREATE_ALBUMS,DELETE_ALBUMS,CHECK_ADMIN } = admin;
const { createSong, deleteSong, createAlbum,deleteAlbum,checkAdmin} = adminControllers;


const router = express.Router();

router.use(protectedRoute,requireAdmin)

router.get(CHECK_ADMIN,checkAdmin)
router.post(CREATE_SONGS, createSong);
router.delete(DELETE_SONGS,deleteSong);
router.post(CREATE_ALBUMS,createAlbum);
router.delete(DELETE_ALBUMS,deleteAlbum);

export default router;
