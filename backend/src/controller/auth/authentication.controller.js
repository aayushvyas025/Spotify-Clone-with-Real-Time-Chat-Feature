import { Constants } from "../../helper/index.js";

const {apiResponseMessages} = Constants; 
const {serverError, authMessages} = apiResponseMessages; 
const {signupMessages} = authMessages; 
const {signupFields} = signupMessages; 

const authControllers = {
  signupController: (request, response) => {
    const signupInfo = request.body; 

    if(!signupInfo) {
      return response.status(400).json({success:false, message:signupFields})
    }

    try {
    } catch (error) {
      console.error(`Error while signing-up user ${error?.message}`);
      response
        .status(500)
        .json({ success: false, message:serverError });
    }
  },
  loginController: (request, response) => {},
  logoutController: (request, response) => {},
};

export default authControllers;
