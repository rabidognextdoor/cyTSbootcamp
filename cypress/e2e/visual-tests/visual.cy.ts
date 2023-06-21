const pages = ['http://example.com'];
const sizes = { widths: [375, 768, 992, 1200] };
const targetElem = 'h1';

describe('Visual Regression', () => {
    pages.forEach(page => {
        it(`Should match ${page} in resolution defined in snapshot function`, () => {
            cy.visit(page);
            cy.snapResolution(`${page}`, sizes);
        });
    });
});

describe('Single element snapshot', () => {
    it(`Should match the first ${targetElem} on ${pages[0]}`, () => {
        cy.visit(pages[0]);
        cy.snapElement(`The ${targetElem} of ${pages[0]}`, {
            scope: targetElem,
        });
    });
});
