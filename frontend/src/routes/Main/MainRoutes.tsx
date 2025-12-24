import { frontendRoutes } from "@/helper";
import { MainLayout } from "@/layout";
import Pages from "@/pages";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";


const { HomePage, ChatPage, AuthPage } = Pages;
const { homeRoute, chatPageRoute, ssoCallbackAuthRoute, authRoute } = frontendRoutes;

function MainRoutes() {
  return (
    
    <Routes>
      <Route path={authRoute} element={<AuthPage />} />
      <Route
					path={ssoCallbackAuthRoute}
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={authRoute} />}
				/>
      <Route element={<MainLayout />}>
        <Route path={homeRoute} element={<HomePage />} />
        <Route path={chatPageRoute} element={<ChatPage/>} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
