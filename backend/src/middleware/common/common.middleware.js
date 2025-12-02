import { Constants } from "../../helper/index.js"
import cors from "cors"
import { clerkMiddleware } from '@clerk/express'


const { envVariables } = Constants;
const { nodeEnvironment,frontendUrl } = envVariables;

const commonMiddleware = {
  jsonParser: (app, express) => app.use(express.json()),
  corsConnection: (app) => {
    if (nodeEnvironment !== "production") {
      app.use(
        cors({
          origin:frontendUrl,
          credentials: true,
        })
      );
    }
  },
  clerkAuthMiddleware:(app) => app.use(clerkMiddleware())
/**
 * clerkMiddleware() adds Clerk's authentication data to every incoming request.
 * 
 * It automatically injects user session info (like userId, sessionId, auth status)
 * into req.auth, so protected routes can easily check if a user is logged in.
 *
 * Since our app uses Clerk for handling login, logout, and user sessions,
 * this middleware ensures all routes can access authentication details.
 */
};

export default commonMiddleware;
