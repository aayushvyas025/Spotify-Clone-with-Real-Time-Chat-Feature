import React from "react";
import Pages from "@/pages";
import { frontendRoutes } from "@/helper";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layout";

const { HomePage } = Pages;
const { homeRoute } = frontendRoutes;

function HomeRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={homeRoute} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default HomeRoutes;
