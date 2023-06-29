const url = 'http://the-internet.herokuapp.com/dropdown';
const dropdown = '#dropdown';
const option1 = 'option[value="1"]';
const option2 = 'option[value="2"]';

class DropdownPage {
    static visit() {
        cy.visit(url);
    }

    static selectOption1() {
        cy.get(dropdown).select(1);
    }

    static selectOption2() {
        cy.get(dropdown).select(2);
    }

    static validateOption1() {
        cy.get(option1).should('be.selected');
    }

    static validateOption2() {
        cy.get(option2).should('be.selected');
    }
}

export default DropdownPage;
