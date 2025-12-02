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
};

export default commonMiddleware;
