import Cypress from 'cypress';

export interface Chainable {
    visitHomepage(): Chainable;
    visitLoginpage(): Chainable;
    visitFeedbackpage(): Chainable;
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('http://zero.webappsecurity.com');
});

Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
});
export default class app {}
