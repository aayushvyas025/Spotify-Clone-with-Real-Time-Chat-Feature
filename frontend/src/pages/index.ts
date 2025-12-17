import { lazy, type LazyExoticComponent, type FC } from "react";

type PageComponent = LazyExoticComponent<FC>;

const Pages = {
  HomePage: lazy(() => import("./Home/HomePage")),
  AuthPage: lazy(() => import("./Auth/AuthPage")),
  AuthRedirectCallbackPage:lazy(() => import("./Auth SSO Callback/AuthRedirectCallbackPage"))
} satisfies Record<string, PageComponent>;

export default Pages;
