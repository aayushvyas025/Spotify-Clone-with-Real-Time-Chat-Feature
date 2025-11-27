import { Constants } from "../../helper/index.js";
import cors from "cors"
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
};

export default commonMiddleware;
