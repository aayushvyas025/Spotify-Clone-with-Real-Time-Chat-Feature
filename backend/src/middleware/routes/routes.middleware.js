import { apiRoutes } from "../../helper/index.js";
import {
  adminRoutes,
  albumRoutes,
  authRoutes,
  songRoutes,
  statsRoutes,
  userRoutes,
} from "../../routes/index.js";

const { baseURL } = apiRoutes;

const routesMiddleware = {
  users: (app) => app.use(baseURL, userRoutes),
  admin: (app) => app.use(baseURL, adminRoutes),
  songs: (app) => app.use(baseURL, songRoutes),
  albums: (app) => app.use(baseURL, albumRoutes),
  statistics: (app) => app.use(baseURL, statsRoutes),
  auth: (app) => app.use(baseURL, authRoutes),
};

export default routesMiddleware;
