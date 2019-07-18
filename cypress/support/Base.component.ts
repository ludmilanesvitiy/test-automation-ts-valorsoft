///<reference types="Cypress" />

export abstract class BaseComponent {
    abstract pageUrl: string;

    isElemContainText(selector : string, textToContain: string){
        cy.get(selector).should('to.contain', textToContain);
    }


    hoverOnElem(elementSelector: string) {
        cy.get(elementSelector).trigger('mouseover');
    };

    clickOnElem(elementSelector: string, elmentIndex = 0) {
        cy.get(elementSelector).eq(elmentIndex).click();
    };

    sendKeysToElement(elementSelector: string, text:string) {
        cy.get(elementSelector).type(text);
    };


    isElemVisible(elementSelector: string) {
        cy.get(elementSelector).should('to.be.visible');
    }

    isURLcontains(URLPart: string) {
        cy.url().should('to.contain', URLPart);
    }




}