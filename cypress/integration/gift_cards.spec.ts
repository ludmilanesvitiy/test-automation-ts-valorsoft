/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {GiftCardsPo} from "../support/giftCards.po";

describe('Choose and add gift card to cart', () =>{
    const homePage = new HomePo();
    const giftCardsPage = new GiftCardsPo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Choose the Gift card ad add it to cart', () => {
        const giftName = 'Amazon.com eGift Card';
        const giftAmount = '100';
        const giftPrice = '$100.00';
        const email = 'test123@gmail.com';
        const successMessage = 'Added to Cart';
        const cartNumber = '1'

        homePage.clickOnElem(homePage.giftCardLink);
        cy.url().should('include', giftCardsPage.pageUrl);
        giftCardsPage.isElemVisible(giftCardsPage.giftCards);
        giftCardsPage.clickOnElem(giftCardsPage.giftCards);
        giftCardsPage.isElemContainText(giftCardsPage.eGiftCardTitle, giftName);
        giftCardsPage.isElemContainValue(giftCardsPage.giftAmount100Button, giftAmount );
        giftCardsPage.clickOnElem(giftCardsPage.giftAmount100Button);
        cy.get(giftCardsPage.amountButton100).should('have.class','a-button-selected');
        giftCardsPage.isElemContainText(giftCardsPage.previewAmount, giftPrice);
        giftCardsPage.isElemContainText(giftCardsPage.buyBoxText, giftPrice);
        giftCardsPage.typeIntoElement(giftCardsPage.emailInput, email);
        giftCardsPage.clickOnElem(giftCardsPage.addToCartButton);
        giftCardsPage.isElemContainText(giftCardsPage.orderMessage, successMessage);
        giftCardsPage.isElemContainText(giftCardsPage.cartCount, cartNumber);




    });

});