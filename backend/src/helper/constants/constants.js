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
    success:true,
    notSuccess:false,
    serverError:`Internal server error`,
    allFieldsRequired:`All fields required`,
    requiredUploadFiles:`Please upload all Files`,
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
        songCreated:`Song created successfully`,
        songDeleted:`Song deleted successfully`,
        albumCreated:`Album created successfully`,
        albumDeleted:`Album deleted successfully`,
        adminChecked:`Successfully check admin`
    },
    albumMessages:{
        fetchAllAlbums:`Successfully fetch all albums`,
        fetchAlbumId:`Successfully fetch album`,
        albumNotFound:`Album not found`
    },
    songMessages:{
        fetchAllSongs:`Successfully fetch all songs`,
        fetchSongId:`Successfully fetch song`,
        songNotFound:`Song not found`,
        featuredSongs:`Successfully fetch the featured songs`,
        madeForYouSongs:`Successfully fetch the made for you songs`,
        trendingSongs:`Successfully fetch the trending songs`        
    },
    userMessages:{
        getAllUsers:`Successfully fetch  all users`
    },
    statsMessages:{
        fetchStats:`Successfully fetch all stats`
    }
}
}); 

export default Constants; 