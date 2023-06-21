import loginPage from '../../page-objects/pages/loginPage';

describe('Visual regression of the Login page', () => {
    before(function () {
        cy.visitLoginpage();
        loginPage.fillUsername('test');
        loginPage.fillPassword('test');
        loginPage.checkRememberMe();
    });

    it('Capture snapshots at all breakpoints', () => {
        cy.responsiveSnap(`Login page`);
    });
});
