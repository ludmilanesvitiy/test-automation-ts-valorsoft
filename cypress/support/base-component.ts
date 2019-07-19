/// <reference types="Cypress" />

export abstract class BaseComponent {

    abstract pageUrl: string;

    navigateTo() {
        cy.visit(this.pageUrl);
    }

    verifyUrl(route: string) {
        cy.url().should('to.contain', route);
    }

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

    verifyAttribute(elementSelector: string, attributeName: string, attributeValue: string) {
        cy.get(elementSelector).should('have.attr', attributeName, attributeValue);
    }
}