import { helperFunctions } from "@/helper";
import { useAuthStore } from "@/store";
import type { UseGetAuthTokenInterface } from "@/types/interfaces/hooks/hooksInterface";
import type { AuthToken } from "@/types/type/Helper/helperType";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

const { updateApiToken } = helperFunctions;

function useGetAuthToken():UseGetAuthTokenInterface {
  const [loading, setLoading] = useState(true);
    const { getToken} = useAuth();
    const {checkAdminStatus, } = useAuthStore();
    
    const initAuth = async ():Promise<void> => {
    try {
      const token:AuthToken = await getToken();
      updateApiToken(token);
      if(token) {
       await checkAdminStatus();
      }
    } catch (error:any) {
      updateApiToken(null)
      console.error(`Error While ${error?.message}`);
    }finally {
        setLoading(false)
    }
  }; 

  return {initAuth, loading}
}

export default useGetAuthToken; 