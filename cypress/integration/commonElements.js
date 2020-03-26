'use strict';

beforeEach(() => cy.openPage('home'));

describe('Common page elements', () => {
    it('Contains header', () =>
        cy.contains(`Web Design & Development by Simon Hudson`));
    it('Contains banner title', () =>
        cy.contains(`Hi there, my name's Simon.`));
    it('Contains banner text', () =>
        cy.contains(
            `I am an experienced front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites and applications.`
        ));
    it('Contains banner links', () => {
        [
            './Simon_Hudson_CV.pdf',
            'https://github.com/simonhudson',
            'https://stackoverflow.com/story/simonhudson'
        ].forEach((link, index) =>
            cy
                .get('.external-links__link')
                .eq(index)
                .should('have.attr', 'href', link)
        );
    });
});
