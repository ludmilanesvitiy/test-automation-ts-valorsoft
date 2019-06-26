describe('Cypress Example in TypeScript', () => {
    beforeEach(() => {
        cy.visit('commands/actions')
    });

    it('.type() - type into a DOM element', () => {
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });
});
