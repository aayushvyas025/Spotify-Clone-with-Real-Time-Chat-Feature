import { AuthLoader } from "@/components/Loader Components";
import { useGetAuthToken } from "@/hooks";
import type { AuthProviderProps } from "@/types/interfaces/context/contextInterface";
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
