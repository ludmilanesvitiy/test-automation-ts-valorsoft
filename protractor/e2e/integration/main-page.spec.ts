import { $$, $, browser, ExpectedConditions, protractor } from 'protractor';
import { MainPo } from '../support/main.po';

describe("tests for main page", () => {
    const mainPage = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = [39, 79, 299];

    beforeEach(async () => {
        await mainPage.navigateTo();
    });

    it("check page title", async () => {
        await browser.get("/");
        expect(await mainPage.getTitle()).toContain("ng-book: The Complete Book on AngularJS");
    });
    it("check header links", async () => {
        await browser.get("/");
        for (let link  of headerLinks) {
            expect(await mainPage.headerButtons.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }

    });

    it("check jump to packages item", async () => {
        await $('div.intro a').click();
        expect(await mainPage.getCurrentUrl()).toContain('#packages');
        for (let price  of prices) {
            //expect(await $$(".pricing-table h3").get(prices.indexOf(price)).getText()).toContain(price);
            expect(await mainPage.priceHeaders.get(prices.indexOf(price)).getText()).toContain(price);
        }
    });

    it("check buy popup", async () => {
        await mainPage.jumpToButton.click();
        for (let i = 0; i < await mainPage.getItButtons.count(); i++) {

            await mainPage.getItButtons.get(i).click();
            await browser.switchTo().frame(mainPage.getItIframe.getWebElement());
            await mainPage.waitForVisible(mainPage.paymentContainerEmail, 10000);
            expect(await mainPage.paymentContainerEmail.isDisplayed()).toBeTruthy();
            expect(await mainPage.getCurrentPrice()).toContain(prices[i]);
            await mainPage.closeButton.click();
            expect(await mainPage.getCurrentPrice()).toContain(prices[i]);
            await mainPage.pressEsc();
            await mainPage.switchToDefaultContent();
            await mainPage.waitForInVisible(mainPage.getItIframe);
            //browser.sleep(10000)
        }

    });
});
