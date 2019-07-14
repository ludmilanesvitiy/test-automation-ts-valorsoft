import {browser, $$, element, $, ExpectedConditions} from "protractor";
import {protractor} from "protractor/built/ptor";
import {MainPo} from "../support/main.po";


describe('Main page test suite', () => {
    const mainPage = new MainPo();


    beforeEach(async () =>  {
        await mainPage.navigateTo();
    })
    it('Check page title', async () => {
        expect(await browser.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });
    it('Check headers', async () => {
        for (let link of mainPage.headerLinks) {
            expect(await mainPage.headerButtons.get(mainPage.headerLinks.indexOf(link)).getAttribute('href')).toContain(link)
        }
    });

    it('Check Jump button', async () => {
        await mainPage.jumpToPackegesButton.click();
        expect(await mainPage.getCurrentUrl()).toContain('https://ng-book.com/#packages');
        for (let price of mainPage.pricesArray)
        expect(await mainPage.prices.get(mainPage.pricesArray.indexOf(price)).getText())
    });

    it('Check payment for 1 element', async () => {
        await mainPage.jumpToPackegesButton.click();
        for (let index = 0; index < await mainPage.getItButtons.count(); index++) {
            await $$('div.getit a').get(index).click();
            await browser.switchTo().frame(await mainPage.paymentIframe.getWebElement());
            await mainPage.waitForVisible(await mainPage.emailField);
            expect(mainPage.isElementDisplayed(await mainPage.emailField)).toBeTruthy();
            expect(await mainPage.paymentPrice.getText()).toContain(await mainPage.pricesArray[index])
            await mainPage.paymentCloseButton.click();
            expect(await mainPage.paymentPrice.getText()).toContain(await mainPage.pricesArray[index])
            await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            await browser.switchTo().defaultContent();
            await browser.sleep(2000)
        }
    });
});