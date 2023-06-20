import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from './loginPage';

Given('I open login page', () => {
    LoginPage.visit();
});
When('I fill out username', () => {
    LoginPage.fillUsername('username');
});
When('I fill out password', () => {
    LoginPage.fillPassword('password');
});
When('I submit login', () => {
    LoginPage.submitForm();
});
When('I check the keep me signed in box', () => {
    LoginPage.checkKeepSigned();
});
Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible');
});
