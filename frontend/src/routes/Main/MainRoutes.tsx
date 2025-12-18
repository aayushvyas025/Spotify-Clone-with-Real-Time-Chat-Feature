import { Route, Routes } from "react-router-dom";
import { frontendRoutes } from "@/helper";
import Pages from "@/pages";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

const { HomePage, AuthPage } = Pages;
const { homeRoute, authRoute, ssoCallbackAuthRoute } = frontendRoutes;

function MainRoutes() {
  return (
    <Routes>
      <Route path={homeRoute} element={<HomePage />} />
      <Route
        path={ssoCallbackAuthRoute}
        element={
          <AuthenticateWithRedirectCallback
            signUpForceRedirectUrl={authRoute}
          />
        }
      />
      <Route path={authRoute} element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoutes;
