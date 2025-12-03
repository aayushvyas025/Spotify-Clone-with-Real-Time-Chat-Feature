import { Constants } from "../../helper/index.js";
import { User } from "../../model/index.js";

const {apiResponseMessages} = Constants; 
const {authMessages} = apiResponseMessages; 
const {signupMessages} = authMessages; 
const {signupFields, signupUserExist, userSignedUp} = signupMessages; 

const authControllers = {
  clerkCallback: async(request, response,next) => {
    const {id, firstName, lastName, imageUrl} = request.body; 

    if(!id || !firstName || !lastName || !imageUrl) {
      return response.status(400).json({success:false, message:signupFields})
    }

    try {
      const user = await User.findOne({clerkId:id}); 
      if(user) {
        return response.status(400).json({success:false, message:signupUserExist})
      }

      const newUser = await User.create({
        clerkId:id,
        fullName: `${firstName} ${lastName}`,
        imageUrl
      })

      response.status(201).json({success:true, message:userSignedUp, newUser})

    } catch (error) {
      console.error(`Error while signing-up user ${error?.message}`);
      next(error)
    }
  },
};

export default authControllers;
