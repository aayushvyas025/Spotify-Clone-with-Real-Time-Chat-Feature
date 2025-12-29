import { helperFunctions } from "@/helper";
import { useAuthStore } from "@/store";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

const { updateApiToken } = helperFunctions;

function useGetAuthToken() {
  const [loading, setLoading] = useState(true);
    const { getToken} = useAuth();
    const {checkAdminStatus, } = useAuthStore();
    
    const initAuth = async ():Promise<void> => {
    try {
      const token = await getToken();
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