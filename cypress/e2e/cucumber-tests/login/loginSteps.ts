import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from './loginPage';

Given('I open login page', () => {
    LoginPage.visit();
});
Given('I navigate to a page protected by authorization', () => {
    cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
});
When('I fill username with {string}', (username: string) => {
    LoginPage.fillUsername(username);
});
When('I fill password with {string}', (password: string) => {
    LoginPage.fillPassword(password);
});
When('I submit login', () => {
    LoginPage.submitForm();
});
When('I check the keep me signed in box', () => {
    LoginPage.checkKeepSigned();
});
Then('I should see account summary', () => {
    cy.get('#account_summary_tab').should('be.visible');
});
Then('I should see error message', () => {
    LoginPage.shouldShowError();
});
Then('I should be redirected with a 302 status code', () => {
    cy.request({
        url: 'http://zero.webappsecurity.com/bank/account-summary.html',
        followRedirect: false,
    }).then(resp => {
        expect(resp.status).to.equal(302);
        expect(resp.redirectedToUrl).to.equal(
            `${Cypress.env('url')}login.html`
        );
    });
});
