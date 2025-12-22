import { API } from "@/config";
import { apiRoutes, frontendRoutes } from "@/helper";
import { useUser } from "@clerk/clerk-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const { authentication } = apiRoutes;
const { LOGIN } = authentication;
const {homeRoute} = frontendRoutes;


const useFetchUserAuth = () => {
const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const syncAttempted = useRef(false);  
 
   const syncUser = async (): Promise<void> => {
    try {
      if (!isLoaded || !user || syncAttempted.current) return;
      await API.post(LOGIN, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
      });
      syncAttempted.current = true; 
    } catch (error:any) {
      console.error(`Error While Syncing with User ${error?.message}`);
    }finally {
      navigate(homeRoute)
    }
  };

  return {isLoaded, syncUser, navigate, user}
}

export default useFetchUserAuth 