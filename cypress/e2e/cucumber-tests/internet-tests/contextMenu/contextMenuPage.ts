const url = 'http://the-internet.herokuapp.com/context_menu';
const alertText = 'You selected a context menu';
const button = '#hot-spot';

class ContextMenuPage {
    static visit() {
        cy.visit(url);
    }

    static clickContextButton() {
        cy.get(button).rightclick();
    }

    static validateAlert() {
        cy.on('window:alert', t => {
            expect(t).to.contain(alertText);
        });
    }
}

export default ContextMenuPage;
