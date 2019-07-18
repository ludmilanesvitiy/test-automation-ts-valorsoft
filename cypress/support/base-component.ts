/// <reference types="Cypress" />

export abstract class BaseComponent {

    abstract pageUrl: string;

    isElemContainText(elementSelector: string, textToContain: string) {
        cy.get(elementSelector).should('to.contain', textToContain);
    }

    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    clickOnElem(elementSelector: string, elemIndex = 0) {
        cy.get(elementSelector).eq(elemIndex).click();
    };

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    }

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    }
}