import { lazy, type LazyExoticComponent, type FC } from "react";

type PageComponent = LazyExoticComponent<FC>;

const Pages = {
  AdminPage:lazy(() => import("./Admin/AdminPage")),
  HomePage: lazy(() => import("./Home/HomePage")),
  AuthPage: lazy(() => import("./Auth/AuthPage")),
  ChatPage:lazy(() => import("./Chat/ChatPage")),
  AlbumPage:lazy(() => import("./Albums/AlbumPage"))
} satisfies Record<string, PageComponent>;

export default Pages;
