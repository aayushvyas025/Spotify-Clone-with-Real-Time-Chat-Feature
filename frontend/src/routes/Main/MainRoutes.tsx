import { Route, Routes } from "react-router-dom";
import { frontendRoutes } from "@/helper";
import Pages from "@/pages";

const { HomePage, AuthPage, AuthRedirectCallbackPage } = Pages;
const { homeRoute, authRoute, ssoCallbackAuthRoute } = frontendRoutes;

function MainRoutes() {
  return (
    <Routes>
      <Route path={homeRoute} element={<HomePage />} />
      <Route
        path={ssoCallbackAuthRoute}
        element={<AuthRedirectCallbackPage />}
      />
      <Route path={authRoute} element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoutes;
