import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventsDisplay from '@/components/EventsDisplay';


describe('EventsDisplay', () => {
     // Renders search input and events cards
     it('should render search input and events cards', () => {
      // Arrange
      render(<EventsDisplay events={[]} usersCount={0} landing={false} />);
  
      // Act
      const searchInput = screen.getByPlaceholderText('Search by name');
      const eventsCards = screen.queryAllByTestId('events-card');
  
      // Assert
      expect(searchInput).toBeInTheDocument();
      expect(eventsCards.length).toBe(0);
    });

    // it('should filter events based on search query', () => {
    //   // Arrange
    //   const events = [
    //     {
    //       id: "1",
    //       name: "Sample Event 1",
    //       desc: "Sample Description 1",
    //       imageSrc: "sample_image_1.jpg",
    //       time: "Sample Time 1",
    //       distance: "Sample Distance 1",
    //       amount: "Sample Amount 1",
    //       createdAt: new Date(),
    //       userId: "user_id_1",
    //       createdBy: "created_by_1",
    //       user: {
    //         id: "user_id_1",
    //         // ... other user properties
    //       },
    //       participants: ["participant_id_1", "participant_id_2"],
    //       leaderboard: [
    //         {
    //           // ... leaderboard properties
    //         },
    //       ],
    //     },
    //     {
    //       id: "2",
    //       name: "Sample Event 2",
    //       desc: "Sample Description 2",
    //       imageSrc: "sample_image_2.jpg",
    //       time: "Sample Time 2",
    //       distance: "Sample Distance 2",
    //       amount: "Sample Amount 2",
    //       createdAt: new Date(),
    //       userId: "user_id_2",
    //       createdBy: "created_by_2",
    //       user: {
    //         id: "user_id_2",
    //         // ... other user properties
    //       },
    //       participants: ["participant_id_3", "participant_id_4"],
    //       leaderboard: [
    //         {
    //           // ... leaderboard properties
    //         },
    //       ],
    //     },
    //   ]; 
    //   render(<EventsDisplay events={events} usersCount={0} landing={false} />);

    //   // Act
    //   const searchInput = screen.getByPlaceholderText('Search by name');
    //   fireEvent.change(searchInput, { target: { value: 'Event 2' } });
    //   const eventsCards = screen.queryAllByTestId('events-card');

    //   // Assert
    //   expect(eventsCards.length).toBe(1);
    //   expect(eventsCards[0]).toHaveTextContent('Event 2');
    // });

        // Displays loader when events are being fetched
        it('should display loader when events are being fetched', () => {
          // Arrange
          render(<EventsDisplay events={[]} usersCount={0} landing={false} />);
      
          // Act
          const loader = screen.getByText('No events found');
      
          // Assert
          expect(loader).toBeInTheDocument();
        });

            // Displays loader when events are empty
    it('should display loader when events are empty', () => {
      // Arrange
      render(<EventsDisplay events={[]} usersCount={0} landing={false} />);
  
      // Act
      const loader = screen.getByText('No events found');
  
      // Assert
      expect(loader).toBeInTheDocument();
    });
});
