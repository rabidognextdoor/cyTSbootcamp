import Navbar from '../page-objects/components/navbar';
import loginPage from '../page-objects/pages/loginPage';

describe('Full login spec', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('url')}`);
        Navbar.clickSignIn();
    });
    it('Ensures that unauthorized users are redirected to sign-in page', () => {
        cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
        loginPage.displaySignInButton();
    });
    it('Failed login test', () => {
        loginPage.login('invalid username', 'invalid password');
        loginPage.displayErrorMessage();
    });
    it('Successful login and logout test', () => {
        cy.fixture('loginData').then(({ username, password }) => {
            loginPage.login(username, password);
        });
        cy.url().should('include', 'account-summary.html');
        Navbar.clickLogout();
        Navbar.displaySignInButton();
    });
});
