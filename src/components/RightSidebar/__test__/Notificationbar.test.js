// window.matchMedia is not defined in the Node.js environment where Jest is running your tests.

// To resolve this issue, you can use a package like jest-matchmedia-mock to mock window.matchMedia
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationBar from '../Notificationbar';

// Mock data for testing
jest.mock('../../../utils/helper', () => ({
  notificationsData: [
    { icon: 'notification-icon-1', text: 'Notification 1' },
    { icon: 'notification-icon-2', text: 'Notification 2' },
  ],
  activitiesData: [
    { avatar: 'avatar-1', text: 'Activity 1' },
    { avatar: 'avatar-2', text: 'Activity 2' },
  ],
  contactsData: [
    { icon: 'contact-icon-1', text: 'Contact 1' },
    { icon: 'contact-icon-2', text: 'Contact 2' },
  ],
}));

describe('NotificationBar Component', () => {
  it('renders without crashing', () => {
    render(<NotificationBar />);
    // Check if the component renders the notifications, activities, and contacts sections
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();

    // Check if the mock data items are present
    expect(screen.getByText('Notification 1')).toBeInTheDocument();
    expect(screen.getByText('Notification 2')).toBeInTheDocument();
    expect(screen.getByText('Activity 1')).toBeInTheDocument();
    expect(screen.getByText('Activity 2')).toBeInTheDocument();
    expect(screen.getByText('Contact 1')).toBeInTheDocument();
    expect(screen.getByText('Contact 2')).toBeInTheDocument();
  });
});
