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

            /**
             * Takes snapshot using the Percy tool
             */
            snapshot(): Chainable<Element>;

            /**
             * Takes snapshot using Percy with naming
             * @param name - the name of the screenshot to be saved
             */
            snapshotName(name: string): Chainable<Element>;

            /**
             * Takes snapshot using Percy with naming at pre-determined breakpoints
             * @param name - the name of the screenshot to be saved
             */
            responsiveSnap(name: string): Chainable<Element>;

            /**
             * Takes snapshots with Percy using name of page, and takes an object of
             * breakpoint widths in order to take screenshots at all sizes
             * @param name - The name of the page being captured
             * @param widths - the object containing the array of widths to use as the screenshot resolutions
             */
            snapResolution(
                name: string,
                widths: { widths: number[] }
            ): Chainable<Element>;

            /**
             * Takes snapshots with Percy using the name of the page and the scope
             * of the element that is under test
             * @param name - The name of the page under test
             * @param scope - the selector to be passed to target the desired element
             */
            snapElement(
                name: string,
                scope: { scope: string }
            ): Chainable<Element>;
        }
    }
}
