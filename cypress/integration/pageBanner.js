const cy = require('cypress');

beforeEach(() => cy.openPage('home'));

describe('Page banner', () => {
    it('Contains title', () => cy.contains(`Hi there, my name's Simon.`));
    it('Contains text', () =>
        cy.contains(
            `I am an experienced front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites and applications.`
        ));
    it('Contains banner links', () => {
        [
            './Simon_Hudson_CV.pdf',
            'https://github.com/simonhudson',
            'https://stackoverflow.com/story/simonhudson',
        ].forEach((link, index) =>
            cy
                .get('.external-links__link')
                .eq(index)
                .should('have.attr', 'href', link)
        );
    });
});
