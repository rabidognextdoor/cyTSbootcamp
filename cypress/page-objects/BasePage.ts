export default class BasePage {
    static pause(ms) {
        cy.wait(ms);
    }
    static logMessage(message) {
        cy.log(message);
    }
    static setMobileViewport() {
        cy.setViewport('mobile');
    }
    static setTabletViewport() {
        cy.setViewport('default');
    }
    static setDesktopViewport() {
        cy.viewport('macbook-13');
    }
    static setLargeDesktopViewport() {
        cy.setViewport('desktop');
    }
}
