declare global {
    namespace Cypress {
        interface Chainable<Element> {
            /**
             * Setup the viewport for the current spec
             * @param viewportSize - the size of the viewport to be used for the spec file. (Laptop, Mobile, Desktop, Tablet)
             */
            setViewport(viewportSize: string): Chainable<Element>;

            /**
             * Determines whether an element is currently visible
             * @param selector - the css path of the element that should be used
             */
            isVisible(selector: string): Chainable<Element>;

            /**
             * Determines whether an element is currently hidden
             * @param selector - the css path of the element that should be used
             */
            isHidden(selector: string): Chainable<Element>;

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

            /**
             * Ensures that the execution waits for a certain number of seconds
             * @param seconds - how many seconds should the execution wait
             */
            waitForSeconds(seconds: number): Chainable<Element>;
        }
    }
}
