/// <reference types="Cypress" />

export abstract class BaseComponent {
    abstract pageUrl: string;

    isElemContainText(selector: string, text: string) {
        cy.get(selector).should('to.contain', text);
    }

    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    clickOnElem(elementSelector: string, elementIndex = 0) {
        cy.get(elementSelector).eq(elementIndex).click();
    }

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    }

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    }
}
