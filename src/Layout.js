import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BaseSnowAppContainer from './components/BaseSnowAppContainer/BaseSnowAppContainer';
import HomePage from './pages/Dashboard/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import MyProjectsPage from './pages/My Projects/MyProjectsPage';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import AccountPage from './pages/Account/AccountPage';
import CorporatePage from './pages/Corporate/CorporatePage';
import ProjectsDetailPage from './pages/My Projects/ProjectsDetailPage';
import OnlineCoursesPage from './pages/OnlineCourses/OnlineCoursesPage';
import BlogPage from './pages/Blog/BlogPage';
import SocialPage from './pages/Social/SocialPage';
import ECommercePage from './pages/ECommerce/ECommercePage';
import ErrorPage from './pages/ErrorPage';

const routes = [
  { path: '/dashboard', element: <HomePage /> },
  { path: '/project-dashboard', element: <ProjectsPage /> },
  { path: '/my-projects', element: <MyProjectsPage /> },
  { path: '/project-detail', element: <ProjectsDetailPage /> },
  { path: '/e-commerce', element: <ECommercePage /> },
  { path: '/online-courses', element: <OnlineCoursesPage /> },
  { path: '/user-profile', element: <UserProfilePage /> },
  { path: '/corporate', element: <CorporatePage /> },
  { path: '/account', element: <AccountPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/social', element: <SocialPage /> },
  { path: '/*', element: <ErrorPage /> },
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
