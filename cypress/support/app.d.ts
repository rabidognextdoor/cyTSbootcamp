declare namespace Cypress {
    interface Chainable<Subject> {
        visitHomepage(): Chainable<Subject>;
        visitLoginpage(): Chainable<Subject>;
        visitFeedbackpage(): Chainable<Subject>;
    }
}
