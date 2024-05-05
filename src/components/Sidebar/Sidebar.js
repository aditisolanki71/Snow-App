import React, { useState } from 'react';
import { ReactComponent as LogoImg } from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';
import DefaultIcon from '../Icon/Sidebar/DefaultIcon';
import ECommerceIcon from '../Icon/Sidebar/ECommerceIcon';
import ProjectsIcon from '../Icon/Sidebar/ProjectsIcon';
import OnlineCoursesIcon from '../Icon/Sidebar/OnlineCoursesIcon';
import UserProfileIcon from '../Icon/Sidebar/UserProfileIcon';
import AccountIcon from '../Icon/Sidebar/AccountIcon';
import CorporateIcon from '../Icon/Sidebar/CorporateIcon';
import BlogIcon from '../Icon/Sidebar/BlogIcon';
import SocialIcon from '../Icon/Sidebar/SocialIcon';
import './Sidebar.scss';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar_container" data-testid="sidebar">
      <div>
        <div className="snow_logo">
          <LogoImg />
        </div>
        <div className="sidebar_items">
          <ul>
            <li
              className={` ${activeItem === 'dashboard' ? 'first-child' : ''}`}
            >
              <NavLink
                className="sidebar_item"
                to="/dashboard"
                onClick={() => handleItemClick('dashboard')}
              >
                <DefaultIcon />
                <span className="sidebar_item_text">Default</span>
              </NavLink>
            </li>
            <li
              className={` ${
                activeItem === 'project-dashboard' ? 'first-child' : ''
              }`}
            >
              <NavLink
                className="sidebar_item"
                to="/project-dashboard"
                onClick={() => handleItemClick('project-dashboard')}
              >
                <DefaultIcon />
                <span className="sidebar_item_text">Project Dash</span>
              </NavLink>
            </li>
            <li
              className={` ${activeItem === 'e-commerce' ? 'first-child' : ''}`}
            >
              <NavLink
                className="sidebar_item"
                to="/e-commerce"
                onClick={() => handleItemClick('e-commerce')}
              >
                <ECommerceIcon />
                <span className="sidebar_item_text">eCommerce</span>
              </NavLink>
            </li>
            <li
              className={` ${
                activeItem === 'my-projects' ? 'first-child' : ''
              }`}
            >
              <NavLink
                className="sidebar_item"
                to="/my-projects"
                onClick={() => handleItemClick('my-projects')}
              >
                <ProjectsIcon />
                <span className="sidebar_item_text">Projects</span>
              </NavLink>
            </li>
            <li
              className={` ${
                activeItem === 'online-courses' ? 'first-child' : ''
              }`}
            >
              <NavLink
                className="sidebar_item"
                to="/online-courses"
                onClick={() => handleItemClick('online-courses')}
              >
                <OnlineCoursesIcon />
                <span className="sidebar_item_text">Online Courses</span>
              </NavLink>
            </li>
            <li
              className={` ${
                activeItem === 'user-profile' ? 'first-child' : ''
              }`}
            >
              <NavLink
                className="sidebar_item"
                to="/user-profile"
                onClick={() => handleItemClick('user-profile')}
              >
                <UserProfileIcon />
                <span className="sidebar_item_text">User Profile</span>
              </NavLink>
            </li>
            <li className={` ${activeItem === 'account' ? 'first-child' : ''}`}>
              <NavLink
                className="sidebar_item"
                to="/account"
                onClick={() => handleItemClick('account')}
              >
                <AccountIcon />
                <span className="sidebar_item_text">Account</span>
              </NavLink>
            </li>
            <li
              className={` ${activeItem === 'corporate' ? 'first-child' : ''}`}
            >
              <NavLink
                className="sidebar_item"
                to="/corporate"
                onClick={() => handleItemClick('corporate')}
              >
                <CorporateIcon />
                <span className="sidebar_item_text">Corporate</span>
              </NavLink>
            </li>
            <li className={` ${activeItem === 'blog' ? 'first-child' : ''}`}>
              <NavLink
                className="sidebar_item"
                to="/blog"
                onClick={() => handleItemClick('blog')}
              >
                <BlogIcon />
                <span className="sidebar_item_text">Blog</span>
              </NavLink>
            </li>
            <li className={` ${activeItem === 'social' ? 'first-child' : ''}`}>
              <NavLink
                className="sidebar_item"
                to="/social"
                onClick={() => handleItemClick('social')}
              >
                <SocialIcon />
                <span className="sidebar_item_text">Social</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
