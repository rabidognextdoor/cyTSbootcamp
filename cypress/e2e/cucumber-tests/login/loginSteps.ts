import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open login page', () => {
    cy.visit(`${Cypress.env('url')}login.html`);
});

When('I fill out username', () => {
    cy.get('#user_login').type('username');
});
When('I fill out password', () => {
    cy.get('#user_password').type('password');
});
When('I submit login', () => {
    cy.get('input[type="submit"]').click();
});
Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible');
});
