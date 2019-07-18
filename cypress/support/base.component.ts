/// <reference types="Cypress" />

export abstract class BaseComponent {
    abstract pageUrl: string;

    isElemContainText(elementSelector: string, textToContain: string) {
        cy.get(elementSelector)
            .should("to.contain", textToContain);
    };

    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    clickOnElem(elementSelector: string, elementIndex = 0) {
        cy.get(elementSelector).eq(elementIndex).click();
    };

    isElemVisible(elementSelector: string) {
        cy.get(elementSelector)
            .should('to.be.visible');
    };

    typeIntoElement(elementSelector: string, textToType: string) {
        cy.get(elementSelector).type(textToType);
    };

    clickOnElemWithText(elementSelector: string, textToContains: string) {
        cy.get(elementSelector).contains(textToContains).click();
    };

    isCurrentUrlInclude(textToCompare: string) {
        cy.url()
            .should('include', textToCompare);
    };

    isElemHasAttribute(elementSelector: string, attributeName: string, attributeValue: string) {
        cy.get(elementSelector)
            .should('have.attr', attributeName, attributeValue);
    };

    enterIntoInput(elementSelector: string, inputText: string) {
        cy.get(elementSelector).type(inputText);
    };
}
