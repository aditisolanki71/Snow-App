import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Check if the component renders
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Project Dash')).toBeInTheDocument();
    expect(screen.getByText('eCommerce')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Online Courses')).toBeInTheDocument();
    expect(screen.getByText('User Profile')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Corporate')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Social')).toBeInTheDocument();
  });

  it('updates active item on NavLink click', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Click on a NavLink to update the active item
    fireEvent.click(screen.getByText('Default'));

    // Check if the active item is updated
    const defaultNavLink = screen.getByText('Default');
    const projectDashNavLink = screen.getByText('Project Dash');
    const eCommerceNavLink = screen.getByText('eCommerce');
    // eslint-disable-next-line testing-library/no-node-access
    expect(defaultNavLink.closest('li')).toHaveClass('first-child');
    // eslint-disable-next-line testing-library/no-node-access
    expect(projectDashNavLink.closest('li')).not.toHaveClass('first-child');
    // eslint-disable-next-line testing-library/no-node-access
    expect(eCommerceNavLink.closest('li')).not.toHaveClass('first-child');
  });
});
