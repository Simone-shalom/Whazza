import EventByIdCard from '@/components/EventByIdCard';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { useRouter } from 'next/navigation';
import { mockEventById } from '../../mockData/mockEventById';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));


describe("EventByIDCard", () => {
    
      it('should render EventByIdCard component', () => {
        render(<EventByIdCard {...mockEventById} />);
        const eventCard = screen.getByText(mockEventById.event.name);
        expect(eventCard).toBeInTheDocument();
      });

      it('should open the leaderboard modal on button click', () => {
        render(<EventByIdCard {...mockEventById}  />);
        const joinButton = screen.getByRole('button', { name: /Join/i });
        fireEvent.click(joinButton);
        const modalContent = screen.getByText('Leaderboard'); // Assuming the modal displays 'Leaderboard'
        expect(modalContent).toBeInTheDocument();
      });

      it('should display user place correctly', () => {
        render(<EventByIdCard {...mockEventById}  />);
        const userPlaceElement = screen.getByText(mockEventById.userPlace);
        expect(userPlaceElement).toBeInTheDocument();
      });
      it('should display user time on the leaderboard', () => {
        render(<EventByIdCard {...mockEventById} />);
        const userTimeElement = screen.getByText(mockEventById.times[0].time); // Assuming the time is displayed as is
        expect(userTimeElement).toBeInTheDocument();
      });
     
})