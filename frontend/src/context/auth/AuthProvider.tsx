import { AuthLoader } from "@/components";
import { useGetAuthToken } from "@/hooks";
import React, { useEffect } from "react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { initAuth, loading } = useGetAuthToken();

  useEffect(() => {
    initAuth();
  }, []);

  if (loading) {
    return <AuthLoader />;
  }

  return <div>{children}</div>;
}

export default AuthProvider;
