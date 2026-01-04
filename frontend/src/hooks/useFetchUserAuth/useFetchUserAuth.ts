import { API } from "@/config";
import { apiRoutes } from "@/helper";
import type { SyncUserPayload, SyncUserResponse, useFetchUserAuthInterface } from "@/types/interfaces/hooks/hooksInterface";
import { useUser } from "@clerk/clerk-react";
import { useRef } from "react";

const { authentication } = apiRoutes;
const { AUTH } = authentication;

const useFetchUserAuth = ():useFetchUserAuthInterface => {
  const { isLoaded, user } = useUser();
  const syncAttempted = useRef(false);
  const syncUser = async (): Promise<boolean | undefined> => {
    if (!isLoaded || !user || syncAttempted.current) return false;
    syncAttempted.current = true;

    const syncUserPayload:SyncUserPayload = {
         id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl || "",
    }
    try {
      await API.post<SyncUserResponse>(AUTH, syncUserPayload);

      return true;
    } catch (error: any) {
      syncAttempted.current = false;
      console.error(`Error While Syncing with User ${error?.message}`);
    }
  };

  return { isLoaded, syncUser, user };
};

export default useFetchUserAuth;
