import { Constants, validationChecking } from "../../helper/index.js";
import { User } from "../../model/index.js";

const { apiResponseMessages } = Constants;
const { authMessages, success, notSuccess } = apiResponseMessages;
const { signupMessages } = authMessages;
const { signupFields, signupUserExist, userSignedUp } = signupMessages;
const { authValidation } = validationChecking;

const authControllers = {
  clerkCallback: async (request, response, next) => {
    const { id, firstName, lastName, imageUrl } = request.body;
    const authErrorResponse = authValidation({ id, firstName, lastName });

    if (!authErrorResponse) {
      return response
        .status(400)
        .json({ success: notSuccess, message: signupFields });
    }

    try {
      const user = await User.findOne({ clerkId: id });
      if (user) {
        return response
          .status(200)
          .json({ success: notSuccess, message: signupUserExist });
      }

      const newUser = await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });

      response
        .status(201)
        .json({ success: success, message: userSignedUp, newUser });
    } catch (error) {
      console.error(`Error while signing-up user ${error?.message}`);
      next(error);
    }
  },
};

export default authControllers;
