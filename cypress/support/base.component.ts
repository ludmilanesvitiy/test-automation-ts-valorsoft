/// <reference types="Cypress" />

export abstract class BaseComponent {
    abstract pageUrl: string;

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    }

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    };

    clickOnElem(elementSelector: string, elementIndex = 0) {
        cy.get(elementSelector).eq(elementIndex).click();
    };


    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    isElemContainText(elementSelector: string, textToContain: string) {
        cy.get(elementSelector)
            .should('to.contain', textToContain);

    };
    
    isURLcontain(URLPart: string) {
        cy.url().should('to.contain', URLPart);
    }


}