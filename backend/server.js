import express from "express";
import { databaseConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const { jsonParser, corsConnection, clerkAuthMiddleware, fileUploadMiddleware } = commonMiddleware;
const { users, albums, auth, songs, statistics, admin } = routesMiddleware;

// common Middleware 
jsonParser(app, express);
corsConnection(app);
fileUploadMiddleware(app)
clerkAuthMiddleware(app); 
// routes Middleware 
users(app);
albums(app);
auth(app);
songs(app);
statistics(app);
admin(app);

databaseConnection(app);
