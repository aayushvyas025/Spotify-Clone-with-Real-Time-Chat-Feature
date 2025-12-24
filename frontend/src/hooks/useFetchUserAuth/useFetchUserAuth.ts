import { API } from "@/config";
import { apiRoutes } from "@/helper";
import { useUser } from "@clerk/clerk-react";
import { useRef } from "react";

const { authentication } = apiRoutes;
const { AUTH } = authentication;

const useFetchUserAuth = () => {
  const { isLoaded, user } = useUser();
  const syncAttempted = useRef(false);
  const syncUser = async (): Promise<boolean | undefined> => {
    if (!isLoaded || !user || syncAttempted.current) return false;
    syncAttempted.current = true;
    try {
      await API.post(AUTH, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl || "",
      });

      return true;
    } catch (error: any) {
      syncAttempted.current = false;
      console.error(`Error While Syncing with User ${error?.message}`);
    }
  };

  return { isLoaded, syncUser, user };
};

export default useFetchUserAuth;
