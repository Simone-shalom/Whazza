// cypress/integration/events-display.spec.js

describe('EventsDisplay Component', () => {
    it('should render EventsDisplay component with search functionality', () => {
      // Visit the page
      cy.visit('/events'); // Update the URL as needed
  
      // Ensure the search input is displayed
      cy.get('input[type="text"]').should('exist');
  
      // Type a search query into the input
      const searchQuery = 'pull';
      cy.get('input[type="text"]').type(searchQuery);
  
      // Wait for debouncing to complete
      cy.wait(500);
  
      // Ensure the events match the search query
      cy.get('[data-testid="events-card"]') // Adjust the selector based on your actual CSS classes
        .should('have.length.gt', 0) // Ensure at least one event is displayed
        .each(($event) => {
          cy.wrap($event).should('include.text', searchQuery);
        });
    });
  });
  