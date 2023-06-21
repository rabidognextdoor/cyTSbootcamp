import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I want to wait for {int} milliseconds', (time: number) => {
    cy.wait(time);
});

Given('I see {string} in the title', (title: string) => {
    cy.title().should('include', title);
});
