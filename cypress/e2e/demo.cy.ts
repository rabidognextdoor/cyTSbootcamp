describe('Demo test', () => {
    it('Should visit a website', () => {
        cy.visitLoginpage();
        cy.fixture('loginData').then(({ username, password }) => {
            cy.loginUI(username, password);
        });
    });
});
