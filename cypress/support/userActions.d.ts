declare global {
    namespace Cypress {
        interface Chainable<Element> {
            /**
             * Logs the user into the application
             * @param username - takes username or id
             * @param password - takes user password
             */
            loginUI(username: string, password: string): Chainable<Element>;

            /**
             * Submits a user feedback ticket through the UI
             * @param name - takes the name of the message author
             * @param email - takes email (no backend validation)
             * @param subject - takes subject of the message
             * @param message - message content from the author
             */
            submitFeedback(
                name: string,
                email: string,
                subject: string,
                message: string
            ): Chainable<Element>;
        }
    }
}
