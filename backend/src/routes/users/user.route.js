import express from "express" 
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import { apiRoutes } from "../../helper/index.js";
import {userControllers} from "../../controller/index.js"


const {users} = apiRoutes; 
const {GET_USERS} = users;
const {getAllUsers} = userControllers; 

const router = express.Router(); 

router.use(protectedRoute); 
router.get(GET_USERS,getAllUsers);

export default router; 