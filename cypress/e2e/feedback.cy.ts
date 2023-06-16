import FeedbackPage from '../page-objects/pages/feedbackPage';

describe('Feedback test', () => {
    before(() => {
        FeedbackPage.load();
    });
    it('Should submit feedback form', () => {
        FeedbackPage.fillFeedback();
        FeedbackPage.submitFeedback();
        cy.contains(
            'They will be reviewed by our Customer Service staff and given the full attention that they deserve.'
        ).should('be.visible');
    });
});
