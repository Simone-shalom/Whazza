import { LeaderBoardModal } from '@/components/modals/LeaderboardModal';
import Modal from '@/components/modals/Modal';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



jest.mock('next-auth/react', () => ({
    useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
  }));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children}: any ) => children,
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));
  describe('LeaderBoardModal', () => {
    test('renders the modal and form elements', async () => {

      const bodyContent = (
        <div>
          {/* Your body content here */}
          {/* ... */}
        </div>
      );

      render(
        <Modal
          isOpen={true}
          onClose={() => {}}
          title="Add your result"
          body={bodyContent}
        />
      );
  
      // // Check if the form elements are rendered
      // const timeLabel = screen.getByText(/Your time/i, { selector: 'p' });
      // expect(timeLabel).toBeInTheDocument();
  
      // const distanceLabel = screen.getByText(/Distance/i);
      // expect(distanceLabel).toBeInTheDocument();
  
      // const amountLabel = screen.getByText(/Amount/i);
      // expect(amountLabel).toBeInTheDocument();
  
      // // Test the join button functionality
      // const joinButton = screen.getByRole('button', { name: /join/i });
      // fireEvent.click(joinButton);
  
      // Check if the modal is open
      const modalTitle = screen.getByText(/Add your result/i);
      expect(modalTitle).toBeInTheDocument();
  
      // // Test form submission
      // const submitButton = screen.getByRole('button', { name: /join/i });
      // fireEvent.click(submitButton);
  
      // You may need to wait for the async form submission to complete
      // await waitFor(() => {
      //   expect(screen.getByText(/Leaderboard joined successfully/i)).toBeInTheDocument();
      // });
  
      // Add more tests as needed to verify the functionality of your component
    });
  });