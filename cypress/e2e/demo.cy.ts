describe('Demo test', () => {
    it('Should visit a website', () => {
        cy.setViewport(Cypress.env('viewportSize'));
        cy.visitLoginpage();
        // cy.waitForSeconds(2);
        cy.fixture('loginData').then(({ username, password }) => {
            cy.loginUI(username, password);
        });
    });
});
