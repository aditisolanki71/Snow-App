import React from 'react';
import { render, screen } from '@testing-library/react';
import MyProjectsCards from '../MyProjectsCards';

// Mock the subcomponents if needed
// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('MyProjectsCards Component', () => {
  it('renders MyProjectsCards component correctly', () => {
    render(<MyProjectsCards />);

    // Check if the card container is rendered
    const cardContainer = screen.getByTestId('my-projects-cards');
    expect(cardContainer).toBeInTheDocument();

    // // Check if each project card is rendered
    const myProjectData = [
      // Populate this array with your sample project data matching the structure used in MyProjectsCards
    ];

    myProjectData.forEach((project) => {
      const projectCard = screen.getByText(project.text);
      expect(projectCard).toBeInTheDocument();
      // You can add more specific checks for the content or behavior of each project card
    });
  });

  // Add more test cases as needed for specific behavior of the component
});
