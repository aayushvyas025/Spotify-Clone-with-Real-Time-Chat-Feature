import { clerkClient } from "@clerk/express";
import { Constants } from "../../helper/index.js";

const { envVariables, apiResponseMessages } = Constants;
const { adminEmail } = envVariables;
const { authMessages,notSuccess } = apiResponseMessages;
const { protectedRouteMessages } = authMessages;
const { notAdmin } = protectedRouteMessages;


async function requireAdmin(request, response, next) {
    try {
      const currentUser = await clerkClient?.users?.getUser(
        request?.auth?.userId
      );
      const isAdmin =
        adminEmail === currentUser?.primaryEmailAddress?.emailAddress;

      if (!isAdmin) {
        return response.status(403).json({ success:notSuccess, message: notAdmin });
      }

      next();
    } catch (error) {
      console.error(`Error you are not Admin: ${error?.message}`);
      next(error)
      
    }
  }

export default requireAdmin;
