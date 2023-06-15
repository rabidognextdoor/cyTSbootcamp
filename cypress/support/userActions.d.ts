declare global {
    namespace Cypress {
        interface Chainable<Element> {
            /**
             * @param username - takes username or id
             * @param password - takes user password
             */
            loginUI(username: string, password: string): Chainable<Element>;
        }
    }
}
