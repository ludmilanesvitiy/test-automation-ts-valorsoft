import {$, $$, browser, ExpectedConditions} from "protractor";
import {MainPo} from "../support/main.po";
import {protractor} from "protractor/built/ptor";
import {BaseComponent} from "../support/base.component";

describe('Main page tests', () => {
    const MP = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39', '79', '99'];

    beforeEach(async () => {
        await MP.navigateTo();
    });

    it('Check page title', async () => {
        expect(await MP.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('Check header links ', async () => {
        for (let link of headerLinks) {
            expect(await MP.headerButtons.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it('Check jump to packages btn ', async () => {
        await $('div.intro a').click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
            expect(await MP.pricingTable.get(prices.indexOf(price)).getText()).toContain(price);
        }
    });

    it('Check reject buy ', async () => {
        await $('div.intro a').click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
            await MP.buyButtons.get(prices.indexOf(price)).click();
            await browser.switchTo().frame(MP.getItIframe.getWebElement());
            await MP.waitForVisible(MP.buyEmailField, 8000);
            expect(await MP.buyEmailField.isDisplayed()).toBeTruthy();
            expect(await MP.getCurrentPrice()).toContain(price);
            await MP.closeButton.click();
            expect(await MP.getCurrentPrice()).toContain(price);
            await MP.pressEsc();
            await browser.sleep(2000);
            await MP.switchToDefaultContent();
        }
    });
});