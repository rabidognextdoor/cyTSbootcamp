import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I want to wait for {int} milliseconds', (time: number) => {
    cy.wait(time);
});

Given('I see {string} in the title', (title: string) => {
    cy.title().should('include', title);
});

Given('I see {string} in the url', (url: string) => {
    cy.url().should('include', url);
});

When('I reload the browser', () => {
    cy.reload();
});
