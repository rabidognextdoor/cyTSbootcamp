import BasePage from '../BasePage';

export default class loginPage extends BasePage {
    static login(username, password) {
        cy.loginUI(username, password);
    }

    static fillUsername(username) {
        cy.get('#user_login').type(username);
    }

    static fillPassword(password) {
        cy.get('#user_password').type(password);
    }

    static clickForgotPassword() {
        cy.contains('Forgot your password ?').click();
    }

    static displayErrorMessage() {
        cy.isVisible('.alert-error');
    }

    static displaySignInButton() {
        cy.isVisible('input[type="submit"]');
    }

    static checkRememberMe() {
        cy.get('#user_remember_me').click();
    }
}
