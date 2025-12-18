import express from "express";
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const app = express();
const {
  jsonParser,
  corsConnection,
  clerkAuthMiddleware,
  fileUploadMiddleware,
  errorHandlerMiddleware,
} = commonMiddleware;
const { users, albums, auth, songs, statistics, admin } = routesMiddleware;

// common Middleware
jsonParser(app, express);
corsConnection(app);
fileUploadMiddleware(app);
clerkAuthMiddleware(app);
// routes Middleware
users(app);
albums(app);
auth(app);
songs(app);
statistics(app);
admin(app);

// common middleware : error handler
errorHandlerMiddleware(app);

databaseConnection(app);
