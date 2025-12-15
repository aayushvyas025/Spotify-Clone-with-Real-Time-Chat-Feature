import { lazy, type LazyExoticComponent, type FC } from "react";

type Pages = {
    HomePage:LazyExoticComponent<FC>,
    AuthPage:LazyExoticComponent<FC>
}

const HomePage:LazyExoticComponent<FC> = lazy(() => import("./Home/HomePage"));
const AuthPage:LazyExoticComponent<FC> = lazy(() => import("./Auth/AuthPage"));

const Pages:Pages = {
    HomePage,
    AuthPage
} 

export default Pages; 