import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventByIdClient from '@/app/(routes)/events/[eventId]/components/EventByIdClient';
import { mockCurrentUser } from '../../mockData/mockCurrentUser';
import { mockLeaderboard } from '../../mockData/mockLeaderboard';
import { mockTimes } from '../../mockData/mockTimes';
import { useRouter } from 'next/navigation';
import { mockEvent } from '../../mockData/mockEvent';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

const useLeaderboardModal = jest.fn();

jest.mock('../../src/hooks/use-leaderboard-modal', () => ({
  __esModule: true,
  useLeaderboardModal: () => ({
    onOpen: useLeaderboardModal,
  }),
}));

describe('EventByIdClient component', () => {
  const mockParticipants = 10;
  const mockEventPoints = 100;
  const mockUserPlace = 3;

  it('renders EventByIdClient component correctly', () => {
    render(
      <EventByIdClient
        event={mockEvent}
        leaderboard={mockLeaderboard}
        times={mockTimes}
        participants={mockParticipants}
        eventPoints={mockEventPoints}
        userPlace={mockUserPlace}
        currentUser={mockCurrentUser}
      />
    );

    // Add your assertions here based on the rendered content of the component
    expect(screen.getByText('Sample Event 1')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('performs some action when a button is clicked', async () => {
    render(
      <EventByIdClient
        event={mockEvent}
        leaderboard={mockLeaderboard}
        times={mockTimes}
        participants={mockParticipants}
        eventPoints={mockEventPoints}
        userPlace={mockUserPlace}
        currentUser={mockCurrentUser}
      />
    );

    // Simulate some user interaction, for example, clicking a button
    fireEvent.click(screen.getByText('Join'));

    // Check if the expected action has occurred, for example, check if useRouter was called
    await waitFor(() => {
        expect(useLeaderboardModal).toHaveBeenCalled();
    });
  });

  // Add more test cases as needed
});
