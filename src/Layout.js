import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseSnowAppContainer from "./components/BaseSnowAppContainer/BaseSnowAppContainer";
import HomePage from "./pages/Dashboard/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/dashboard", element: <HomePage /> },
  { path: "/project-dashboard", element: <ProjectsPage /> },
  { path: "/*", element: <ErrorPage /> },
];

const Layout = () => {
  return (
    <>
      <BaseSnowAppContainer>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BaseSnowAppContainer>
    </>
  );
};

export default Layout;
