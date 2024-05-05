import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsDetailPage from '../ProjectsDetailPage';

// Mock the subcomponents if needed
// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('ProjectsDetailPage Component', () => {
  it('renders ProjectsDetailPage component correctly', () => {
    render(<ProjectsDetailPage />);

    // Check if the header is rendered
    const header = screen.getByRole('heading', { name: 'My Projects' });
    expect(header).toBeInTheDocument();

    // Check if the menu items are rendered
    const overviewMenuItem = screen.getByText('Overview');
    const targetsMenuItem = screen.getByText('Targets');
    const budgetMenuItem = screen.getByText('Budget');
    const usersMenuItem = screen.getByText('Users');
    const filesMenuItem = screen.getByText('Files');
    const activityMenuItem = screen.getByText('Activity');
    const settingsMenuItem = screen.getByText('Settings');

    expect(overviewMenuItem).toBeInTheDocument();
    expect(targetsMenuItem).toBeInTheDocument();
    expect(budgetMenuItem).toBeInTheDocument();
    expect(usersMenuItem).toBeInTheDocument();
    expect(filesMenuItem).toBeInTheDocument();
    expect(activityMenuItem).toBeInTheDocument();
    expect(settingsMenuItem).toBeInTheDocument();

    // // Check if the initial content is rendered
    const initialContent = screen.getByText('Overview');
    expect(initialContent).toBeInTheDocument();
  });

  // it('updates content based on menu item click', () => {
  //   render(<ProjectsDetailPage />);

  //   // Click on the "Targets" menu item
  //   fireEvent.click(screen.getByText('Targets'));

  //   // Check if the content updates to "Targets"
  //   // const targetsContent = screen.getByText('Targets');
  //   // expect(targetsContent).toBeInTheDocument();
  // });

  // Add more test cases as needed for specific behavior of the component
});
