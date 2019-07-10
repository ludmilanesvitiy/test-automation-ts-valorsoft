import {$, $$, browser, by, Key, ExpectedConditions} from "protractor";
import {MainPo} from "../support/main.po";

describe("tests for maian page", () => {

    const mainPage = new MainPo();

    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39', '79', '299'];

    beforeEach(async () => {
        await mainPage.navigateTo();
    });

    xit('should contain title', async () => {
        expect(await mainPage.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('should contain header links', async () => {
        for (let link of headerLinks) {
            expect(await mainPage.headerRoutes.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    xit('should scroll to plans blocks', async () => {
        await browser.$('div.intro a').click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
            expect(await $$('.pricing-table h3').get(prices.indexOf(price)).getText()).toContain(price);
        }
    });

    xit('should open purchasing pop-up', async () => {
        await browser.$('div.intro a').click();
        for (let i = 0; i < await $$('div.getit a').count(); i++) {
            await $$('div.getit a').get(i).click();
            await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
            await mainPage.waitForElementVisible($(".payment-container"));
            expect(await $(".payment-container [name=\'email\']").isDisplayed()).toBeTruthy();
            expect(await $(".price").getText()).toContain(prices[i]);
            await $('.changed_mind_button i').click();
            expect(await $('.price').getText()).toContain(prices[i]);
            await browser.actions().sendKeys(Key.ESCAPE).perform();
            await browser.switchTo().defaultContent();
            await browser.sleep(2000);
        }
    });
});
