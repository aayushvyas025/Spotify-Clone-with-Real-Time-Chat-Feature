import express from "express";
import protectedRoute from "../../middleware/authMiddleware/auth.middleware.js";
import requireAdmin from "../../middleware/adminMiddleware/admin.middleware.js";
import { apiRoutes } from "../../helper/index.js";
import { statsControllers } from "../../controller/index.js";

const { stats } = apiRoutes;
const { GET_STATS } = stats;
const { getAllStats } = statsControllers;

const router = express.Router();
router.use(protectedRoute, requireAdmin);

router.get(GET_STATS, getAllStats);

export default router;
