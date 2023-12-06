import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import CreateEventClient from '@/app/(routes)/createEvent/components/CreateEventClient';
import toast from 'react-hot-toast';
import { useEventsModal2 } from '@/hooks/use-events-modal2';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
jest.mock('react-hot-toast', () => ({
    __esModule: true,
    default: {
      error: jest.fn(),
    },
  }));

// Mock useSession
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

jest.mock('../../src/hooks/use-events-modal2', () => ({
    useEventsModal2: jest.fn(),
  }));

describe('CreateEventClient component', () => {
  // Mock data for session
  const mockSession = { data: { user: { id: 'user1' } } };

  beforeEach(() => {
    // Reset mocks before each test
    useEventsModal2.mockReturnValue({
      onOpen: jest.fn(),
    });
  });

  it('renders CreateEventClient component correctly', () => {
    // Mock the session data
    useSession.mockReturnValue(mockSession);

    render(<CreateEventClient />);

    // Add your assertions here based on the rendered content of the component
    expect(screen.getByText('Event creation form')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('opens the event modal when "Add Information" button is clicked with a session', () => {
    // Mock the session data
    useSession.mockReturnValue(mockSession);

    render(<CreateEventClient />);

    // Click the "Add Information" button
    fireEvent.click(screen.getByText('Add Information'));

    // Check if the eventsModal2.onOpen function was called
    waitFor(() => {
        expect(useEventsModal2().onOpen()).toHaveBeenCalled();
    })
  });
  // Add more test cases as needed
});
