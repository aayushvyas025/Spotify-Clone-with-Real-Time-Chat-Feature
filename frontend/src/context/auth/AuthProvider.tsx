
import { AuthLoader } from "@/components";
import { helperFunctions } from "@/helper";
import { useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";

function AuthProvider({children }: {children:React.ReactNode}) {
  const { getToken} = useAuth();
  const [loading, setLoading] = useState(true);
  const { updateApiToken } = helperFunctions;

  const initAuth = async () => {
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

  useEffect(() => {
    initAuth();
  }, [getToken]); 

  if(loading) {
    return <AuthLoader />
  }

  return <div>{children}</div>;
}

export default AuthProvider;
