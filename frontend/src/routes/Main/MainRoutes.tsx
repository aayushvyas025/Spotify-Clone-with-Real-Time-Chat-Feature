import { frontendRoutes } from "@/helper";
import { MainLayout } from "@/layout";
import Pages from "@/pages";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";


const { HomePage, ChatPage, AuthPage, AlbumPage } = Pages;
const { homePageRoute, chatPageRoute, ssoCallbackAuthRoute, authPageRoute, albumPageRoute } = frontendRoutes;

function MainRoutes() {
  return (
    
    <Routes>
      <Route path={authPageRoute} element={<AuthPage />} />
      <Route
					path={ssoCallbackAuthRoute}
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={authPageRoute} />}
				/>
      <Route element={<MainLayout />}>
        <Route path={homePageRoute} element={<HomePage />} />
        <Route path={chatPageRoute} element={<ChatPage/>} />
        <Route path={albumPageRoute} element={<AlbumPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
