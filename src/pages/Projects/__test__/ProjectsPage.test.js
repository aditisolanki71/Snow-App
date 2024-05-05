import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsPage from '../ProjectsPage';

// Mock the subcomponents if needed

// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('ProjectsPage Component', () => {
  it('renders ProjectsPage component correctly', () => {
    render(<ProjectsPage />);

    // Check if the heading is rendered
    expect(screen.getByText('Projects')).toBeInTheDocument();

    // Check if ProjectsCards component is rendered
    expect(screen.getByTestId('projects-cards')).toBeInTheDocument();

    // Check if ProjectStatusTasks component is rendered
    expect(screen.getByTestId('project-status-tasks')).toBeInTheDocument();

    // Check if ProjectChart component is rendered
    expect(screen.getByTestId('project-chart')).toBeInTheDocument();
  });

  // Add more test cases as needed for specific behavior of the component
});
