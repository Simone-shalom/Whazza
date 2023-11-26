// cypress/integration/header_client_spec.js

describe('HeaderClient component', () => {
    beforeEach(() => {
      cy.visit('/'); // Assuming the component is rendered at the root route
    });
  
    it('should display the header with the logo and navigation links', () => {
      cy.contains('Sportify').should('be.visible'); // Check if the logo is displayed
      cy.contains('Events').should('be.visible'); // Check if the 'Events' link is displayed
      cy.contains('Pricing').should('be.visible'); // Check if the 'Pricing' link is displayed
      cy.contains('Dashboard').should('be.visible'); // Check if the 'Dashboard' link is displayed
    });
  

    //fix
    it('should change the background color on scroll', () => {
        cy.wait(1000);
        cy.window().then((win) => {
          win.scrollTo(0, 500); // Simulate scrolling to trigger the background color change
          win.scrollTo(0, 500); 
             // Check if the background color changes after scrolling
             cy.wait(500);

        });
    
      });
})

  
    