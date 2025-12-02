import { Constants } from "../../helper/index.js";


const {apiResponseMessages} = Constants;
const {authMessages} = apiResponseMessages
const {protectedRouteMessages} = authMessages; 
const {unAuthorizedLogin} = protectedRouteMessages;



function protectedRoute(request, response, next) {
    if(!request.auth.userId){
        return response.status(401).json({success:false, message:unAuthorizedLogin});
    }

 next(); 
}

export default protectedRoute 