import express from "express" 
import { apiRoutes } from "../../helper/index.js"; 
import { albumControllers } from "../../controller/index.js";

const router = express.Router() 
const {albums} = apiRoutes;
const { GET_ALBUMS,GET_ALBUMS_BY_ID} = albums; 
const {getAllAlbums,getAlbumsById} = albumControllers;

router.get(GET_ALBUMS, getAllAlbums);
router.get(GET_ALBUMS_BY_ID,getAlbumsById)

export default router 