/// <reference types="Cypress" />

import {HomePo} from "../support/home.po";
import {Gift_cardsPo} from "../support/gift_cards.po";
import {Product_routePo} from "../support/product_route.po";


describe("Actions with Product route", () => {
    beforeEach(() => cy.visit(productRoute.pageUrl));

    const productRoute = new Product_routePo();

    it.only('EN localization should be default', () => {
        cy.viewport(1280, 800);
        productRoute.clickOnElem(productRoute.onehundreddollars);
        productRoute.clickOnElem(productRoute.shareviamessaging);
        productRoute.clickOnElem(productRoute.addtocartbtn);
        productRoute.isElemContainText(productRoute.checktext, productRoute.confirmText);

    })
})