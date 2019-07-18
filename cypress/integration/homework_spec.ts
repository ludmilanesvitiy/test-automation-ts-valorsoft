///<reference types="Cypress" />

import {HomePO} from "../support/Home.PO";
import {SearcDetailsPO} from "../support/SearcDetails.PO";
import {HomeWorkPO} from "../support/HomeWork.PO";

describe('HOME WORK Gift card test', () => {
    const HW = new HomeWorkPO();
    beforeEach(() => cy.visit(HW.pageUrl));

    it('gift card test', () => {
        const giftCardsUrlPart = '/gift-cards/';
        const ProductUrlPart = 'product';
        const price = '100'
        const message = 'Added to Cart'

        //go to Gift cards
        HW.clickOnElem(HW.giftCardsLinkFromMain);
        HW.isURLcontains(giftCardsUrlPart);
        //click on first gift card
        HW.clickOnElem(HW.giftCards);
        HW.isURLcontains(ProductUrlPart);
        //change price
        //HW.clickOnElem(HW.hundredDollarAmount); //can't click because of cypress screen resolution
        HW.sendKeysToElement(HW.customAmount, price);
        HW.isElemContainText(HW.priceAmount, price);
        //add to cart
        HW.clickOnElem(HW.shareViaMSG);
        HW.clickOnElem(HW.addToCartBtn);
        //added to cart message
        HW.isElemContainText(HW.addedToCart, message);
    });
});