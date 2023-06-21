const url = 'http://zero.webappsecurity.com/feedback.html';
const nameInput = '#name';
const emailInput = '#email';
const subjectInput = '#subject';
const messageInput = '#comment';
const submitButton = 'input[type="submit"]';

class FeedbackPage {
    static visit() {
        cy.visit(url);
    }
    static fillFeedbackForm() {
        cy.get(nameInput).type('exampleName');
        cy.get(emailInput).type('exampleEmail');
        cy.get(subjectInput).type('exampleSubject');
        cy.get(messageInput).type('exampleMessage');
    }
    static submitForm() {
        cy.get(submitButton).click();
    }
}

export default FeedbackPage;
