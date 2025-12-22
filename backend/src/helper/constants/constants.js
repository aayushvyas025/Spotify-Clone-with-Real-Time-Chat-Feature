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
    idNotValid:`Error invalid id`,
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
},
seedingSongs: [{
		title: "Stay With Me",
		artist: "Sarah Mitchell",
		imageUrl: "/cover-images/1.jpg",
		audioUrl: "/songs/1.mp3",
		duration: 46, // 0:46
	},
	{
		title: "Midnight Drive",
		artist: "The Wanderers",
		imageUrl: "/cover-images/2.jpg",
		audioUrl: "/songs/2.mp3",
		duration: 41, // 0:41
	},
	{
		title: "Lost in Tokyo",
		artist: "Electric Dreams",
		imageUrl: "/cover-images/3.jpg",
		audioUrl: "/songs/3.mp3",
		duration: 24, // 0:24
	},
	{
		title: "Summer Daze",
		artist: "Coastal Kids",
		imageUrl: "/cover-images/4.jpg",
		audioUrl: "/songs/4.mp3",
		duration: 24, // 0:24
	},
	{
		title: "Neon Lights",
		artist: "Night Runners",
		imageUrl: "/cover-images/5.jpg",
		audioUrl: "/songs/5.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Mountain High",
		artist: "The Wild Ones",
		imageUrl: "/cover-images/6.jpg",
		audioUrl: "/songs/6.mp3",
		duration: 40, // 0:40
	},
	{
		title: "City Rain",
		artist: "Urban Echo",
		imageUrl: "/cover-images/7.jpg",
		audioUrl: "/songs/7.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Desert Wind",
		artist: "Sahara Sons",
		imageUrl: "/cover-images/8.jpg",
		audioUrl: "/songs/8.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
		imageUrl: "/cover-images/9.jpg",
		audioUrl: "/songs/9.mp3",
		duration: 28, // 0:28
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
		imageUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duration: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
		imageUrl: "/cover-images/11.jpg",
		audioUrl: "/songs/11.mp3",
		duration: 29, // 0:29
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		imageUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duration: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		imageUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		imageUrl: "/cover-images/14.jpg",
		audioUrl: "/songs/14.mp3",
		duration: 27, // 0:27
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		imageUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		imageUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		imageUrl: "/cover-images/17.jpg",
		audioUrl: "/songs/17.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
		imageUrl: "/cover-images/18.jpg",
		audioUrl: "/songs/18.mp3",
		duration: 29, // 0:29
	},],
}); 

export default Constants; 