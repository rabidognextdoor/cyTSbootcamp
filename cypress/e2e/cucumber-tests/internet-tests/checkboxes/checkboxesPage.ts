const url = 'http://the-internet.herokuapp.com/checkboxes';
const checkboxes = 'input[type="checkbox"]';

class CheckboxesPage {
    static visit() {
        cy.visit(url);
    }

    static checkBox1() {
        cy.get(checkboxes).first().click();
    }

    static checkBox2() {
        cy.get(checkboxes).eq(1).click();
    }

    static validateCheck() {
        cy.get(checkboxes).first().should('be.checked');
    }

    static validateUnChecked() {
        cy.get(checkboxes).eq(1).should('not.be.checked');
    }
}

export default CheckboxesPage;
