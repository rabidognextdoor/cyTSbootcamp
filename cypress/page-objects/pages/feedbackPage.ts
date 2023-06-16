import BasePage from '../BasePage';

export default class FeedbackPage extends BasePage {
    static load() {
        cy.visit('http://zero.webappsecurity.com/feedback.html');
    }

    static fillFeedback() {
        cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#subject').type(subject);
            cy.get('#comment').type(message);
        });
    }

    static submitFeedback() {
        cy.get('input[type="submit"]').click();
    }

    static clearFeedback() {
        cy.get('input[type="reset"]').click();
    }
}
