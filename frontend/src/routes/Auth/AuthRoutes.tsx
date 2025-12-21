import Pages from "@/pages";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { frontendRoutes } from '@/helper';
import { Route, Routes } from "react-router-dom";

const {  AuthPage } = Pages;
const {  authRoute, ssoCallbackAuthRoute } = frontendRoutes;


function AuthRoutes() {
  return (
    <Routes>
    <Route path={authRoute} element={<AuthPage />} />
     <Route
        path={ssoCallbackAuthRoute}
        element={
          <AuthenticateWithRedirectCallback
            signUpForceRedirectUrl={authRoute}
          />
        }
      />
    </Routes>
  )
}

export default AuthRoutes