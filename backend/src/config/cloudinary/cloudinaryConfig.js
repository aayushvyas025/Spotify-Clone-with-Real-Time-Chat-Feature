import {v2 as cloudinary} from "cloudinary"
import { Constants } from "../../helper/index.js"

const {envVariables} = Constants;
const {cloudinaryCloudName, cloudinaryCloudApiKey, cloudinaryCloudApiSecret} = envVariables;


cloudinary.config({
    cloud_name:cloudinaryCloudName,
    api_key:cloudinaryCloudApiKey,
    api_secret:cloudinaryCloudApiSecret,
}); 

export default cloudinary; 