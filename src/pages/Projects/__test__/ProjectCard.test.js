import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
const mockText = 'Sample Project';
const mockNumber = 42;
const mockColor = '#123456';
const mockIsProductivity = true;

describe('ProjectCard Component', () => {
  it('renders ProjectCard component correctly', () => {
    // Mock data

    render(
      <ProjectCard
        text={mockText}
        number={mockNumber}
        color={mockColor}
        isProductivity={mockIsProductivity}
      />
    );

    // Check if the card container is rendered
    const cardContainer = screen.getByText(mockText);
    // .closest('.project_card_container');
    expect(cardContainer).toBeInTheDocument();

    // Check if the header elements are rendered correctly
    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByText(mockNumber.toString())).toBeInTheDocument();

    // Check if the subtext with ArrowIcon is rendered for productivity
    if (mockIsProductivity) {
      const subtext = screen.getByText('+1.48%');
      const arrowIcon = screen.getByTestId('arrow-icon');
      // eslint-disable-next-line jest/no-conditional-expect
      expect(subtext).toBeInTheDocument();
      // eslint-disable-next-line jest/no-conditional-expect
      expect(arrowIcon).toBeInTheDocument();
    } else {
      // Ensure that the subtext and ArrowIcon are not present if not productivity
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.queryByText('+1.48%')).toBeNull();
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.queryByTestId('arrow-icon')).toBeNull();
    }
  });
});
