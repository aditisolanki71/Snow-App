import React from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import SearchBar from '../SearchBar/SearchBar';
import BlogIcon from '../Icon/Header/BlogIcon';
import StarIcon from '../Icon/Header/StarIcon';
import SunIcon from '../Icon/Header/SunIcon';
import ClockCounterClockwiseIcon from '../Icon/Header/ClockCounterClockWiseIcon';
import BellIcon from '../Icon/Header/BellIcon';
import { HeaderStyles } from './Header.styles';
import './Header.scss';

const Header = (props) => {
  return (
    <HeaderStyles>
      <div data-testid="toggle-sidebar-button" className="header_container">
        <div className="header_left">
          <BlogIcon data-testid="blog-icon" />
          <StarIcon data-testid="star-icon" />
          <BreadCrumb
            data-testid="breadcrumb"
            items={[
              {
                title: 'dashboards',
              },
              {
                title: <a href="/">Default</a>,
              },
            ]}
          />
        </div>
        <div className="header_right">
          <div>
            <SearchBar data-testid="search-bar" />
          </div>
          <SunIcon data-testid="sun-icon" />
          <ClockCounterClockwiseIcon data-testid="clock-icon" />
          <a href="/notification">
            <BellIcon data-testid="bell-icon" />
          </a>
          <BlogIcon data-testid="blog-icon" />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
