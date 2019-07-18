/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {GiftCardsPo} from "../support/giftCards.po";

describe('Choose and add gift card to cart', () =>{
    const homePage = new HomePo();
    const giftCardsPage = new GiftCardsPo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Choose the Gift card ad add it to cart', () => {
        const giftName = 'Amazon.com eGift Card';
        const giftAmount = '25';

        homePage.clickOnElem(homePage.giftCardLink);
        cy.url().should('include', giftCardsPage.pageUrl);
        giftCardsPage.isElemVisible(giftCardsPage.giftCards);
        giftCardsPage.clickOnElem(giftCardsPage.giftCards);
        giftCardsPage.isElemContainText(giftCardsPage.eGiftCardTitle, giftName);
        giftCardsPage.isElemContainValue(giftCardsPage.giftAmount25Button, giftAmount );
        giftCardsPage.clickOnElem(giftCardsPage.giftAmount25Button);




    });

});