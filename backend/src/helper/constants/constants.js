import dotenv from "dotenv"

dotenv.config();

const Constants = Object.freeze({
envVariables: {
    nodeEnvironment: process.env.NODE_ENVIRONMENT,
    backendPort:process.env.BACKEND_PORT,
    frontendUrl:process.env.FRONTEND_URL,
    mongodbUri:process.env.MONGODB_URI,
    adminEmail:process.env.ADMIN_EMAIL,
    cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryCloudApiKey:process.env.CLOUDINARY_CLOUD_API_KEY,
    cloudinaryCloudApiSecret:process.env.CLOUDINARY_CLOUD_API_SECRET
},
apiResponseMessages: {
    serverError:`Internal server error`,
    allFieldsRequired:`All fields required`,
    authMessages:{
        signupMessages: {
            signupFields:`All fields required to signup user`,
            signupUserExist:`User already exist`,
            userSignedUp:`User successfully signup`
        },
        protectedRouteMessages:{
            unAuthorizedLogin:`Unauthorized - you must be logged in`,
            notAdmin:`Unauthorized - you are not admin`
        },

    },
    adminMessages:{
        requiredUploadFiles:`Please Upload all Files`,
        songCreated:`Song Created successfully`,
        songDeleted:`Song deleted successfully`
    }
}
}); 

export default Constants; 