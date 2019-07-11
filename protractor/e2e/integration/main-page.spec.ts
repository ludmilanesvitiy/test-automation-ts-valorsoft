import {$, $$, browser, ExpectedConditions} from "protractor";
import {MainPo} from "../support/main.po";
import {protractor} from "protractor/built/ptor";
import {BaseComponent} from "../support/base.component";

describe('Main page tests',  ()=> {
    const mainPO = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39', '79', '99'];

    beforeEach(async ()=>{
        await mainPO.navigateTo();
    });

    it('Check page title', async ()=> {
        expect(await mainPO.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('Check header links ', async ()=> {
        for (let link of headerLinks) {
           expect(await mainPO.headerButtons.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it('Check jump to packages btn ', async ()=> {
        await $('div.intro a').click();
        expect(await browser.getCurrentUrl()).toContain('#packages');

        for (let price of prices) {
            expect(await $$('.pricing-table h3').get(prices.indexOf(price)).getText()).toContain(price);
        }
    });

    it('Check jump to packages btn ', async ()=> {
        await $('div.intro a').click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
        await $$('div.getit a').get(prices.indexOf(price)).click();
        await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
        //await browser.wait(ExpectedConditions.visibilityOf($('.payment-container [name="email"]')), 8000);
        await mainPO.waitForVisible($('.payment-container [name="email"]'), 8000);
        expect(await $('.payment-container [name="email"]').isDisplayed()).toBeTruthy();
        expect(await $('.price').getText()).toContain(price);
        await $('.changed_mind_button').click();
        expect(await $('.price').getText()).toContain(price);
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        await browser.sleep(5000);
        await browser.switchTo().defaultContent();
        }
    });
});