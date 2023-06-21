/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import '@percy/cypress';

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('setViewport', viewportSize => {
    const viewportSizes = {
        mobile: { width: 375, height: 667 },
        laptop: { width: 1366, height: 768 },
        desktop: { width: 1920, height: 1080 },
        default: { width: 1280, height: 720 },
    };
    const { width, height } =
        viewportSizes[viewportSize] || viewportSizes.default;
    cy.viewport(width, height);
});

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('http://zero.webappsecurity.com');
});

Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
});

Cypress.Commands.add('loginUI', (username, password) => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.get('#user_remember_me').click();
    cy.get('input[type="submit"]').click();
});

Cypress.Commands.add('submitFeedback', (name, email, subject, message) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#subject').type(subject);
    cy.get('#comment').type(message);
    cy.contains('Send Message').click();
});

Cypress.Commands.add('waitForSeconds', seconds => {
    cy.wait(seconds * 1000);
});

Cypress.Commands.add('snapshot', () => {
    cy.percySnapshot();
});

Cypress.Commands.add('snapshotName', (name: string) => {
    cy.percySnapshot(name);
});

Cypress.Commands.add('responsiveSnap', (name: string) => {
    cy.percySnapshot(name, { widths: [375, 768, 992, 1080] });
});

Cypress.Commands.add(
    'snapResolution',
    (name: string, widths: { widths: number[] }) => {
        cy.percySnapshot(name, widths);
    }
);
