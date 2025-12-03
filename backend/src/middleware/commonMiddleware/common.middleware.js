import { Constants } from "../../helper/index.js"
import { clerkMiddleware } from '@clerk/express'
import cors from "cors"
import fileUpload from "express-fileupload"
import path from "path"

const { envVariables,apiResponseMessages } = Constants;
const {serverError} = apiResponseMessages;
const { nodeEnvironment,frontendUrl } = envVariables;
const __dirname = path.resolve();


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
  errorHandlerMiddleware:(app) => {
    app.use((error, request, response, next) => {
       response.status(500).json({success:false, message:nodeEnvironment === "production" ? serverError : error?.message})
    })
  },
  clerkAuthMiddleware:(app) => app.use(clerkMiddleware()),
/**
 * clerkMiddleware() adds Clerk's authentication data to every incoming request.
 * 
 * It automatically injects user session info (like userId, sessionId, auth status)
 * into req.auth, so protected routes can easily check if a user is logged in.
 *
 * Since our app uses Clerk for handling login, logout, and user sessions,
 * this middleware ensures all routes can access authentication details.
 */
fileUploadMiddleware:(app) => app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:path.join(__dirname, "tmp"),
  createParentPath:true,
  limits:{
    fileSize:10 * 1024 * 1024 // means upload size of was upto 10mb 
  }
}))
};

export default commonMiddleware;
