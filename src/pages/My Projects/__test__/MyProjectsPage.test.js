import React from 'react';
import { render, screen } from '@testing-library/react';
import MyProjectsPage from '../MyProjectsPage';

// Mock the subcomponents if needed
// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

describe('MyProjectsPage Component', () => {
  it('renders MyProjectsPage component correctly', () => {
    render(<MyProjectsPage />);

    // Check if the header is rendered
    const header = screen.getByRole('heading', { name: 'My Projects' });
    expect(header).toBeInTheDocument();

    // Check if MyProjectsCards component is rendered
    const myProjectsCards = screen.getByTestId('my-projects-page');
    expect(myProjectsCards).toBeInTheDocument();

    // Check if MyProjectName component is rendered
    // const myProjectName = screen.getByText('MyProjectName'); // Adjust the text as per your actual implementation
    // expect(myProjectName).toBeInTheDocument();
    // You can add more specific checks for the content or behavior of MyProjectName
  });

  // Add more test cases as needed for specific behavior of the component
});
