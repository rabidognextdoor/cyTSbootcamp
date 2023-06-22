import loginPage from '../../page-objects/pages/loginPage';
import AccountLinks from '../../page-objects/components/accountLinks';

describe('Visual Regression - data Tables', () => {
    before(function () {
        loginPage.visit();
        loginPage.login('username', 'password');
    });
    it('Should load Account Activity', () => {
        AccountLinks.clickAccountActivity();
        cy.responsiveSnap('Account Activity data tables');
    });
});
