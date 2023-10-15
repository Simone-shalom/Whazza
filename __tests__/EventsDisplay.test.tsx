import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EventsDisplay from '@/components/EventsDisplay';
import { useRouter } from 'next/navigation';
import { mockEvents } from '../mockData/mockEvents';


 // Mock the useRouter hook
 jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    query: { id: '1' },
  }),
}));

// jest.mock('next/router', () => ({ useRouter: () => ({ push: jest.fn() }) }));


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
   
      // const events = mockEvents
  
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

describe('Functionality', () => {

   // Filters events based on search query
   it('should filter events based on search query', async () => {
   
    const events = mockEvents

    render(<EventsDisplay events={events} usersCount={0} landing={false} />);
    const searchInput = screen.getByPlaceholderText('Search by name');
    fireEvent.change(searchInput, { target: { value: 'Sample Event 1' } });
    await waitFor(() => {
      expect(screen.getByText('Sample Event 1')).toBeInTheDocument();
      expect(screen.queryByText('Sample Event 2')).toBeNull();
    });
  });

  it('should display "No events found" message when search query does not match any event', async () => {
    const events = mockEvents

    render(<EventsDisplay events={events} usersCount={0} landing={false} />);
    const searchInput = screen.getByPlaceholderText('Search by name');
    fireEvent.change(searchInput, { target: { value: 'Sample Event 3' } });
    await waitFor(() => {
      expect(screen.getByText(/No events found/)).toBeInTheDocument();
    })
  });

})

   
   