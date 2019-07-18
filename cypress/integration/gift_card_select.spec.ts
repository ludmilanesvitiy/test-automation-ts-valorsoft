/// <reference types="Cypress" />
import { HomePo } from '../support/home.po';
import { GiftCardsPo } from '../support/giftCards.po';


describe('Gift card choosing and adding to cart', () => {
    const homePage = new HomePo();
    const giftCardsPage = new GiftCardsPo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('Gift card choosing and adding to cart check', () => {

        const expectedPrice = '$100';
        const expectedSuccessMsg = 'Added to Cart';

        homePage.clickOnElemWithText(homePage.headerNavLinks, homePage.giftCardsLinkText);

        giftCardsPage.isCurrentUrlInclude(giftCardsPage.pageUrl);

        giftCardsPage.clickOnElem(giftCardsPage.giftCardPrintAtHome);
        giftCardsPage.clickOnElem(giftCardsPage.giftPrice100);

        giftCardsPage.isElemHasAttribute(giftCardsPage.giftPrice100, 'aria-checked', 'true');
        giftCardsPage.isElemContainText(giftCardsPage.cartTotalPrice, expectedPrice);

        giftCardsPage.clickOnElem(giftCardsPage.addToCartBtn);

        giftCardsPage.isElemContainText(giftCardsPage.addedToCartSuccessMsg, expectedSuccessMsg);

    })
});
