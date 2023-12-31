// Selectors:
const url = `${Cypress.env('url')}login.html`;
const userInput = '#user_login';
const passInput = '#user_password';
const submitButton = 'input[type="submit"]';
const rememberMe = '#user_remember_me';
const errorMessage = '.alert-error';

// Page Object:
class LoginPage {
    // Visit webpage
    static visit() {
        cy.visit(url);
    }
    // Fill username
    static fillUsername(name) {
        cy.get(userInput).type(name);
    }
    // Fill password
    static fillPassword(pass) {
        cy.get(passInput).type(pass);
    }
    // Check keep me signed in box
    static checkKeepSigned() {
        cy.get(rememberMe).click();
    }
    // Submit form
    static submitForm() {
        cy.get(submitButton).click();
    }
    // Check for Error
    static shouldShowError() {
        cy.get(errorMessage).contains('Login and/or password are wrong.');
    }
}

export default LoginPage;
