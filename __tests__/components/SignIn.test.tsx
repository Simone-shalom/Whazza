import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Update the path accordingly
import { signIn } from 'next-auth/react';
import SiginBtn from '@/components/SiginBtn';

// Mock the signIn function
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('SiginBtn component', () => {
  it('renders the SiginBtn component correctly', () => {
    render(<SiginBtn />);

    // Check if the button is rendered
    expect(screen.getByText('Sign in with google')).toBeInTheDocument();
  });

  it('calls handleSignIn when the button is clicked', async () => {
    render(<SiginBtn />);

    // Mock the signIn function to resolve immediately
    signIn.mockResolvedValueOnce({});

    // Click the button
    fireEvent.click(screen.getByText('Sign in with google'));

    // Wait for any asynchronous operations to complete
    await waitFor(() => {
      // Check if handleSignIn was called
      expect(signIn).toHaveBeenCalledWith('google', { callbackUrl: '/dashboard' });
    });
  });
});
