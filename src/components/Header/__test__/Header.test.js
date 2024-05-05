import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

// Mocking the icons and components used in the Header
jest.mock('../../Icon/Header/BlogIcon', () => () => (
  <div data-testid="blog-icon" />
));
jest.mock('../../Icon/Header/StarIcon', () => () => (
  <div data-testid="star-icon" />
));
jest.mock('../../Icon/Header/SunIcon', () => () => (
  <div data-testid="sun-icon" />
));
jest.mock('../../Icon/Header/ClockCounterClockWiseIcon', () => () => (
  <div data-testid="clock-icon" />
));
jest.mock('../../Icon/Header/BellIcon', () => () => (
  <div data-testid="bell-icon" />
));
jest.mock('../../BreadCrumb/BreadCrumb', () => ({ items }) => (
  <div data-testid="breadcrumb">
    {items.map((item, index) => (
      <span key={index}>{item.title}</span>
    ))}
  </div>
));
jest.mock('../../SearchBar/SearchBar', () => () => (
  <div data-testid="search-bar" />
));

describe('Header Component', () => {
  it('renders all icons and components correctly', () => {
    render(<Header />);

    // Check if icons are rendered
    const blogIcons = screen.getAllByTestId('blog-icon');
    blogIcons.forEach((blogIcon) => {
      expect(blogIcon).toBeInTheDocument();
    });

    expect(screen.getByTestId('star-icon')).toBeInTheDocument();
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
    expect(screen.getByTestId('clock-icon')).toBeInTheDocument();
    expect(screen.getByTestId('bell-icon')).toBeInTheDocument();

    // Check if BreadCrumb and SearchBar are rendered
    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
