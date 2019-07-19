import {HomePo} from "../support/home.po";
import {GiftCardsPo} from "../support/giftCards.po";

describe('Gift cards suite', () => {
    const homePage = new HomePo();
    const giftCardPage = new GiftCardsPo();

    beforeEach(() => {

        cy.visit('');
    })

    it('should ', () => {
        const price = '100';
        const giftCardId = '[href*="/B07TMMZKBJ"]';

        homePage.clickOnElem(homePage.giftCardLink);
        giftCardPage.isCurrentURLContain(giftCardPage.pageUrl);
        for (let elem of giftCardPage.giftCardLinks) {
            giftCardPage.isElemVisible(elem);
        }
        giftCardPage.clickOnElem(giftCardPage.giftCardLinks[0]);
        giftCardPage.isElemVisible(giftCardPage.customGiftAmountInput);
        giftCardPage.clickOnElem(giftCardPage.customGiftAmountField);
        giftCardPage.typeIntoElement(giftCardPage.customGiftAmountInput, price);
        giftCardPage.isElemContainText(giftCardPage.giftCardAmount, price);
        giftCardPage.typeIntoElement(giftCardPage.emailField, 'email@email.com');
        giftCardPage.clickOnElem(giftCardPage.addToCartButton);
        giftCardPage.isElemContainText(giftCardPage.cartCounter, '1');
        giftCardPage.clickOnElem(giftCardPage.cartLink);
        giftCardPage.isElemVisible(giftCardId);
        giftCardPage.isElemContainText(giftCardPage.cartSubtotal, price);



    });
});