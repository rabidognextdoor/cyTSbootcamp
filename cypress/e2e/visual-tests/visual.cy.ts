const pages = ['http://example.com'];
const sizes = { widths: [375, 768, 992, 1200] };

describe('Visual Regression', () => {
    pages.forEach(page => {
        it(`Should match ${page} in resolution defined in snapshot function`, () => {
            cy.visit(page);
            cy.snapResolution(`${page}`, sizes);
        });
    });
});
