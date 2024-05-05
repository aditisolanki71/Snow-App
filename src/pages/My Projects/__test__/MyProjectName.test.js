import React from 'react';
import { render, screen } from '@testing-library/react';
import MyProjectName from '../MyProjectName';
// Mock the subcomponents if needed
// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('MyProjectName Component', () => {
  it('renders MyProjectName component correctly', () => {
    render(<MyProjectName />);

    // Check if the card container is rendered
    const cardContainer = screen.getByTestId('my-project-name');
    expect(cardContainer).toBeInTheDocument();

    // Check if each project card is rendered
    const myProjects = [
      // Populate this array with your sample project data matching the structure used in MyProjectName
    ];

    myProjects.forEach((project) => {
      // Assuming that each project has a unique name, adjust the selector accordingly
      const projectNameCard = screen.getByText(project.projectName);
      expect(projectNameCard).toBeInTheDocument();
      // You can add more specific checks for the content or behavior of each project card
    });
  });

  // Add more test cases as needed for specific behavior of the component
});
