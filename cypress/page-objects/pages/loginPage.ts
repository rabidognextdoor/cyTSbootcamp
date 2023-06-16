import BasePage from '../BasePage';

export default class loginPage extends BasePage {
    static login(username, password) {
        cy.loginUI(username, password);
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
}
