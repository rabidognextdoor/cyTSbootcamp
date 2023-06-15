declare global {
    namespace Cypress {
        interface Chainable<Element> {
            /**
             * Navigates to the homepage of the application
             */
            visitHomepage(): Chainable<Element>;

            /**
             * Navigates to the Login page of the application
             */
            visitLoginpage(): Chainable<Element>;

            /**
             * Navigates to the Feedback page of the application
             */
            visitFeedbackpage(): Chainable<Element>;
        }
    }
}
