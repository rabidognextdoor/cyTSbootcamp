const url = 'http://the-internet.herokuapp.com/add_remove_elements/';
const addButton = 'button[onclick="addElement()"]';
const delButton = 'button[onclick="deleteElement()"]';

class addRemovePage {
    static visit() {
        cy.visit(url);
    }

    static clickAdd() {
        cy.get(addButton).click();
    }

    static clickDelete() {
        cy.get(delButton).click();
    }

    static isAdded() {
        cy.get(delButton).should('be.visible');
    }

    static isDeleted() {
        cy.get(delButton).should('not.exist');
    }
}

export default addRemovePage;
