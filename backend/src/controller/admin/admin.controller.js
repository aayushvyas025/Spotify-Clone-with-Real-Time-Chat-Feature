import {Constants} from "../../helper/index.js"

const {apiResponseMessages} = Constants; 
const {serverError} = apiResponseMessages;

const adminControllers = {
createSong:async(request, response) => {
  try {
    
  } catch (error) {
    console.error(`Error while creating song:${error?.message}`); 
    response.status(500).json({success:false, message:serverError})
  }
}
}

export default adminControllers 