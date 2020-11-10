const cy = require('cypress');

beforeEach(() => cy.openPage('home'));

describe('Page header', () => {
    it('Contains correct text', () =>
        cy.contains(`Web Design & Development by Simon Hudson`));
    it('Contains icon', () =>
        cy.get('[data-test="site-logo--header"]').should('be.visible'));
});
