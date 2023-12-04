import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventsClient from '@/app/(routes)/events/components/EventsClient';
import { useRouter } from 'next/navigation';
import { mockEvents } from '../../mockData/mockEvents';

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

describe('EventsClient component', () => {

  // Mock data for users count
  const mockUsersCount = 5;

  // Mock subscription status
  const mockHasSub = true;

  it('renders EventsClient component correctly', () => {
    render(
      <EventsClient events={mockEvents} usersCount={mockUsersCount} hasSub={mockHasSub} />
    );

    // Check if the "Create an Event" button is present
    expect(screen.getByText('Create an Event')).toBeInTheDocument();

    // Check if the heading is present
    expect(screen.getByText('All available events')).toBeInTheDocument();

    // Check if EventsDisplay component is rendered
    expect(screen.getByTestId('events-display')).toBeInTheDocument();
  });

  it('redirects to /createEvent when "Create an Event" button is clicked with subscription', () => {

    render(
      <EventsClient events={mockEvents} usersCount={mockUsersCount} hasSub={mockHasSub} />
    );

    // Click the "Create an Event" button
    fireEvent.click(screen.getByText('Create an Event'));

    // Check if useRouter was called with the correct path
  waitFor(() => {
    expect(useRouter().push).toHaveBeenCalledWith('/createEvent');
    })  
  });

  it('shows error toast when "Create an Event" button is clicked without subscription', () => {

    // Update subscription status to false
    render(<EventsClient events={mockEvents} usersCount={mockUsersCount} hasSub={false} />);

    // Click the "Create an Event" button
    fireEvent.click(screen.getByText('Create an Event'));

    // Check if useRouter was not called
    expect(useRouter().push).not.toHaveBeenCalled();

    // Check if error toast is shown
   waitFor(() => {
    expect(screen.getByText('Only subscribed users can create events')).toBeInTheDocument();
   })
  });
});
