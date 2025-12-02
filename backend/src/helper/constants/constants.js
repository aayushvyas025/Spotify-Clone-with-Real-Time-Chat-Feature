import dotenv from "dotenv"

dotenv.config();

const Constants = Object.freeze({
envVariables: {
    nodeEnvironment: process.env.NODE_ENVIRONMENT,
    backendPort:process.env.BACKEND_PORT,
    frontendUrl:process.env.FRONTEND_URL,
    mongodbUri:process.env.MONGODB_URI,
    adminEmail:process.env.ADMIN_EMAIL
},
apiResponseMessages: {
    serverError:`Internal Server Error`,
    authMessages:{
        signupMessages: {
            signupFields:`All fields required to signup user`,
            signupUserExist:`User already exist`,
            userSignedUp:`User successfully signup`
        },
        protectedRouteMessages:{
            unAuthorizedLogin:`Unauthorized - you must be logged in`,
            notAdmin:`Unauthorized - you are not admin`
        }

    }
}
}); 

export default Constants; 