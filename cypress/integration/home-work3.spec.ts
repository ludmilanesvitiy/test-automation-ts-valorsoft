/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {GiftCardPo} from "../support/gift-card.po";
import {GiftCatdProductPo} from "../support/gift-catd-product.po";
import {GiftProductHucPo} from "../support/gift-product-huc.po";

describe('check gift cards', () => {

    const homePage = new HomePo();
    const giftCardPage = new GiftCardPo();
    const giftProdHucPage = new GiftProductHucPo();
    const giftCardProductPage = new GiftCatdProductPo();

    beforeEach(() => {
        homePage.navigateTo();
    });

    it('check set gift amount', () => {
        const successAddedMessage = 'Added to Cart';
        const giftPrice = '$100.00';

        homePage.clickOnElem(homePage.secondaryNavElem.giftCardsLink);

        // verify that user redirected to page with route /gift-cards/
        homePage.verifyUrl(giftCardPage.pageUrl);

        cy.get(giftCardPage.giftCardsLinks).as('giftCardArray');
        cy.get('@giftCardArray').each(($giftCard) => {
            // I want to check that all cards are available with something like element.toBeClickable, but I can't
            // find this in Cypress, I know that before we make any action with the element it will be checked by
            // default, but I think it is better to know that all my cards can be choose before action with any of them.
            // How can I check that all cards are available?
        });

        cy.get('@giftCardArray').its('length').then((lenght) => {
            giftCardPage.clickOnElem(giftCardPage.giftCardsLinks, Math.floor(lenght * Math.random()));

        });

        giftCardProductPage.verifyUrl(giftCardProductPage.pageUrl);

        giftCardProductPage.clickOnElem(giftCardProductPage.hundredGiftAmountBth);
        giftCardProductPage.verifyAttribute(giftCardProductPage.hundredGiftAmountBth, 'aria-checked',
            'true');
        giftCardProductPage.isElemContainText(giftCardProductPage.giftPrice, giftPrice);

        cy.get(giftCardProductPage.prodTitle).invoke('text').as('text');
        giftCardProductPage.clickOnElem(giftCardProductPage.shareViaMessagingBtn);
        giftCardProductPage.clickOnElem(giftCardProductPage.addToCardButton);
        giftProdHucPage.isElemContainText(giftProdHucPage.successAddMessage, successAddedMessage);
        giftProdHucPage.hoverOnElem(giftProdHucPage.addedProdImg);
        giftProdHucPage.isElemVisible(giftProdHucPage.giftPopoverContent);

        cy.get('@text').then(($text) => {
            // here I want to use a function from the base component, but I can't get value text as a string
            // (I need to point type of argument 'value'in the base component or I going to get a compile error).
            // So I verify it as to point below
            cy.get(giftProdHucPage.giftPopover.giftName).should('to.contain', $text);
        });
    })
});