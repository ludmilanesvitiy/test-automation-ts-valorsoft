/// <reference types="Cypress" />
import { HomePo } from '../support/home.po';
import { GiftCardsPo } from '../support/giftCard.po';


describe('100$ gift card add to cart', () => {
    const homePage = new HomePo();
    const giftPage = new GiftCardsPo();

    beforeEach(() => cy.visit(homePage.pageUrl));

    it('gift card add to cart', () => {

        const successMessage = 'Added to Cart';
        cy.viewport(1175, 600);

        giftPage.clickOnElem(giftPage.giftCardLink);
        giftPage.isURLcontain(giftPage.giftCardUrl);
        giftPage.clickOnElem(giftPage.eGift);
        giftPage.isElemVisible(giftPage.prise100);
        giftPage.clickOnElem(giftPage.prise100);
        giftPage.typeIntoElement(giftPage.emailField, 'test@gmail.com');
        giftPage.isElemContainText(giftPage.totalPrice, '$100');
        giftPage.clickOnElem(giftPage.addToCartButton);
        giftPage.isElemContainText(giftPage.addedToCart, successMessage);

    })
});

