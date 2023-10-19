import CreateEventClient from '@/app/(routes)/createEvent/components/CreateEventClient';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
 // Update the path to your component

jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
}));
jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

describe('CreateEventClient', () => {
  it('renders the component', () => {
    render(<CreateEventClient />);
    expect(screen.getByText('Event creation form')).toBeInTheDocument();
  });

  it('opens the event modal when the button is clicked', () => {
    render(<CreateEventClient />);
    fireEvent.click(screen.getByText('Add Information'));
    // Add additional assertions or expectations here based on the behavior you want to test
  });

});
