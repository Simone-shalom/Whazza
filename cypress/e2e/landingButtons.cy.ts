// cypress/integration/landing_buttons_spec.js

describe('LandingButtons component', () => {
    beforeEach(() => {
      cy.visit('/'); // assuming your component is rendered at the root route
    });
  
    it('should redirect to the authentication page when "Get started" button is clicked', () => {
      cy.get('[data-testid="StartedBtn"]').click();
      cy.url().should('include', '/auth');
    });
  
    it('should open the correct GitHub link in a new tab when "Github" button is clicked', () => {
        const githubLink = 'https://github.com/Simone-shalom/Whazza';
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
            cy.get('[data-testid="GithubBtn"]').click().then(() => {
              expect(win.open).to.be.calledWith(githubLink, '_blank');
            });
          });
    });
  
    // You can add more test cases based on your application's logic and requirements
})  