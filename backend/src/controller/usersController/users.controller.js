import { Constants } from "../../helper/index.js";
import { User } from "../../model/index.js";

const {apiResponseMessages} = Constants; 
const {success, userMessages} = apiResponseMessages;  
const {getAllUsers} = userMessages; 

const userControllers = {
    getAllUsers:async(request, response, next) => {
        const currentUserId = request.auth().userId;
        try {
            const users = await User.find({clerkId:{$ne:currentUserId}});

            response.status(200).json({success:success, message:getAllUsers, users})
            
        } catch (error) {
            console.error(`Error While Fetching All Users ${error?.message}`);
            next(error)
        }
    }
}

export default userControllers 