/// <reference types="Cypress" />

export abstract class BaseComponent {
    abstract pageUrl: string;

    clickOnElem(elementSelector: string, elementIndex = 0) {
        cy.get(elementSelector).eq(elementIndex).click();
    };

    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    };

    isElemContainText(elementSelector: string, textToContain: string) {
        cy.get(elementSelector)
            .should('to.contain', textToContain);
    };

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    }
}
