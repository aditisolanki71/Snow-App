import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsCards from '../ProjectsCards';
import { projectDashboardData } from '../../../utils/helper';

// Mock the subcomponents if needed
// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('ProjectsCards Component', () => {
  it('renders ProjectsCards component correctly', () => {
    render(<ProjectsCards />);

    // Check if the container is rendered
    const projectsCardsContainer = screen.getByTestId('projects-cards');
    expect(projectsCardsContainer).toBeInTheDocument();

    // Check if each project card is rendered based on the projectDashboardData
    projectDashboardData.forEach((project, index) => {
      // Check if the project card is rendered
      const projectCard = screen.getByText(project.text);
      expect(projectCard).toBeInTheDocument();

      // Check if the project card has the correct background color
      // expect(projectCard).toHaveStyle({ backgroundColor: project.color });

      // Check if the project card has the correct number
      const projectNumber = screen.getByText(project.number.toString());
      expect(projectNumber).toBeInTheDocument();

      // Add more specific checks based on your component structure and data
    });
  });
});
