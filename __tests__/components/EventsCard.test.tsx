import EventsCard from '@/components/EventsCard';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

  jest.mock('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue({ push: jest.fn() })
  }));
  
describe('EventsCard', () => {
  const mockData = {
    id: "1",
    name: "Sample Event 1",
    desc: "Sample Description 1",
    imageSrc: "/sample_image_1.jpg",
    time: "Sample Time 1",
    distance: "Sample Distance 1",
    amount: "Sample Amount 1",
    createdAt: new Date(),
    userId: "user_id_1",
    createdBy: "created_by_1",
    user: {
      id: "user_id_1",
      // ... other user properties
    },
    participants: ["participant_id_1", "participant_id_2"],
    leaderboard: [
      {
        // ... leaderboard properties
      },
    ],
  }

  it('should render EventsCard component', () => {
    render(<EventsCard data={mockData} eventBlur={false} usersCount={10} />);
    const eventName = screen.getByText('Sample Event 1');
    expect(eventName).toBeInTheDocument();
    // Add more assertions based on the content you expect to render
  });

  it('should navigate to event page on click', async () => {

    render(<EventsCard data={mockData} eventBlur={false} usersCount={10} />);
    const cardElement = screen.getByTestId('events-card');
    fireEvent.click(cardElement);

    await waitFor(() => {
      expect(useRouter().push).toHaveBeenCalledWith('/events/1');
    })
  });

  // Add more tests for other interactions and functionalities of the component
});