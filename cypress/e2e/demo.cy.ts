describe('Demo test', () => {
    it('Should visit a website', () => {
        cy.visitLoginpage();
        cy.loginUI('username', 'password');
    });
});
