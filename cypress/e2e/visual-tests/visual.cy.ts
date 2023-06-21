describe('visual regression', () => {
    it('My First visual regression test', () => {
        // Load website
        cy.visit('http://example.com');
        // Compare snapshots
        cy.snapshot();
    });
});
