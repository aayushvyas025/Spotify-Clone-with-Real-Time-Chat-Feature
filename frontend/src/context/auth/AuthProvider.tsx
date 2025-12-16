import { helperFunctions } from "@/helper";
import { useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";

function AuthProvider() {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const { updateApiToken } = helperFunctions;

  const initAuth = async () => {
    try {
      const token = await getToken();
      updateApiToken(token);
    } catch (error:any) {
      updateApiToken(null)
      console.error(`Error While ${error?.message}`);
    }
  };

  useEffect(() => {
    initAuth();
  }, [getToken]); 

  if(loading) {
    
  }

  return <div>AuthProvider</div>;
}

export default AuthProvider;
