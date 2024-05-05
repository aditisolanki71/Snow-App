import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseSnowAppContainer from "./components/BaseSnowAppContainer/BaseSnowAppContainer";
import HomePage from "./pages/Dashboard/HomePage";
import MyProjectsPage from "./pages/My Projects/MyProjectsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectsDetailPage from "./pages/My Projects/ProjectsDetailPage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/dashboard", element: <HomePage /> },
  { path: "/project-dashboard", element: <ProjectsPage /> },
  { path: "/my-projects", element: <MyProjectsPage /> },
  { path: "/project-detail", element: <ProjectsDetailPage /> },
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
