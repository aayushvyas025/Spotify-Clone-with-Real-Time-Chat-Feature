import express from "express"; 
import { apiRoutes } from "../../helper/index.js";
import { adminControllers } from "../../controller/index.js";
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import requireAdmin from "../../middleware/adminMiddleware/admin.middleware.js";


const {admin} = apiRoutes;
const {CREATE_SONGS} = admin;
const {createSong} = adminControllers; 


const router = express.Router(); 

router.post(CREATE_SONGS,protectedRoute,requireAdmin, createSong);



export default router 