describe('Feedback test', () => {
    it('Should submit feedback form', () => {
        cy.visitFeedbackpage();
        cy.submitFeedback(
            'Peter',
            'test@example.com',
            'My Subject',
            'This is a message'
        );
    });
});
