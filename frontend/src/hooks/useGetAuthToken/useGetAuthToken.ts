import { helperFunctions } from "@/helper";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";

const { updateApiToken } = helperFunctions;

function useGetAuthToken() {
    const { getToken} = useAuth();
  const [loading, setLoading] = useState(true);

    const initAuth = async ():Promise<void> => {
    try {
      const token = await getToken();
      updateApiToken(token);
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