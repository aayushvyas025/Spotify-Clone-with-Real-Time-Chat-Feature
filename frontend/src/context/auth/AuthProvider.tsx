import { AuthLoader } from "@/components";
import { useGetAuthToken } from "@/hooks";
import type { AuthProviderProps } from "@/types/interfaces";
import { useEffect } from "react";

function AuthProvider({ children }:AuthProviderProps) {
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
