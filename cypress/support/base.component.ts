/// <reference types="Cypress" />
export abstract class BaseComponent {
    abstract pageUrl: string;

    isElemContainText(elementSelector: string, textToContain: string){
        cy.get(elementSelector).should('to.contain', textToContain);
    }

    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    clickOnElem(elementSelector: string, elementIndex = 0) {
        cy.get(elementSelector).eq(elementIndex).click();
    };

    clickOnLinkText(linkText: string, elementIndex = 0) {
        cy.get('a').contains(linkText).eq(elementIndex).click();
    };

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    }

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    }
}