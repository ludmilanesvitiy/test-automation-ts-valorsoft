/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {Gift_cardsPo} from "../support/gift_cards.po";
import {Product_routePo} from "../support/product_route.po";

describe("Navigate to Gift Cards page", () => {
    beforeEach(() => cy.visit(''));
    const homePage = new HomePo();
    const giftCards = new Gift_cardsPo();
    const productRoute = new Product_routePo();

    it('Gift Cards page should be available', () => {
        homePage.clickOnElem(homePage.giftcardNavBtn);
        giftCards.isURLcontains(giftCards.giftCardsUrl);
        giftCards.clickOnElem(giftCards.giftcard);
        productRoute.isURLcontains(productRoute.productUrl);

    })
})