// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.
// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthHeader from '../AuthHeader';

// Mock the React Router's useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('AuthHeader Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <AuthHeader />
      </Router>
    );
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  it('navigates to the correct route on button click', () => {
    const navigateMock = jest.fn();
    // Mock the useNavigate hook to return our mock function
    jest
      .spyOn(require('react-router-dom'), 'useNavigate')
      .mockReturnValue(navigateMock);
    render(
      <Router>
        <AuthHeader />
      </Router>
    );
    // Click on the "Sign In" button
    fireEvent.click(screen.getByText('Sign In'));
    // Check if navigate is called with the correct route
    expect(navigateMock).toHaveBeenCalledWith('/signup');
    // Click on the "Login" button
    fireEvent.click(screen.getByText('Login'));
    // Check if navigate is called with the correct route
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
