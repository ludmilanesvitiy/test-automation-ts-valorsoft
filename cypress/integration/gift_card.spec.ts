/// <reference types="Cypress" />
import {HomePo} from "../support/home.po";
import {GiftCardsPo} from "../support/giftCards.po";
import {GiftCardPo} from "../support/giftCard.po";
import {OrderRowPe} from "../support/orderRow.pe";

describe('Add to cart 100$ gift card', () => {
    const homePage = new HomePo();
    const giftCards = new GiftCardsPo();
    const giftCardPage = new GiftCardPo();
    const orderRowElement = new OrderRowPe();

    it('user should be able to navigate to gift cards page from home page', () => {
        const giftCardsText = 'Gift Cards';

        homePage.visitPage();
        homePage.isElemVisible(homePage.mainNavElem.giftCards);
        homePage.isElemContainText(homePage.mainNavElem.giftCards, giftCardsText);
        homePage.clickOnElem(homePage.mainNavElem.giftCards);
        giftCards.isCurrentUrlContain(giftCards.pageUrl);
    });

    it('user should able visit to page of Amazon.com eGift Card', () => {
        const cardTitle = 'Amazon.com eGift Card';

        giftCards.visitPage();
        giftCards.isElemVisible(giftCards.listOfCards);
        giftCards.clickOnElem(giftCards.listOfCards, 0);
        giftCardPage.isElemVisible(giftCardPage.previewContainer);
        giftCardPage.isElemContainText(giftCardPage.title, cardTitle);
    });

    it('user should able to set 100$ and add gift card to cart', () => {

        const price = "100";
        const oneItemText = "Qty: 1 gift card";

        cy.viewport(1175, 600); // 100$ picker not visible on screen width less than 1175px

        giftCards.visitPage();
        giftCards.clickOnElem(giftCards.listOfCards, 0);
        // click on 100$ picker
        giftCardPage.isElemVisible(giftCardPage.oneHundredDollarsPicker);
        giftCardPage.clickOnElem(giftCardPage.oneHundredDollarsPicker);
        // check prices
        giftCardPage.isElemContainText(giftCardPage.buyBoxText, oneItemText);
        giftCardPage.isElemContainText(giftCardPage.buyBoxPrice, price);
        giftCardPage.isElemContainText(giftCardPage.previewPrice, price);
        //add to cart
        giftCardPage.typeIntoElement(giftCardPage.recipientField, 'john@doe.com');
        giftCardPage.clickOnElem(giftCardPage.addToCartBtn);
        // order row element checks
        orderRowElement.isElemVisible(orderRowElement.container);
        orderRowElement.isElemContainText(orderRowElement.confirmTextElement, orderRowElement.confirmTextEn);
        orderRowElement.isElemContainText(orderRowElement.totalPrice, price);
        orderRowElement.isElemContainText(orderRowElement.totalItems, '1 item');
    });
});
