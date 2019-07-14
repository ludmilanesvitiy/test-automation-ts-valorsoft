import {$$, browser, $, ExpectedConditions, protractor} from "protractor";
import {MainPo} from "../support/main.po";


describe('tests for main page', ()=> {
    const mainPage = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39', '79', '299'];

    beforeEach(async () => {
        await mainPage.navigateTo();
        // await browser.get('/');
    });


    it('check page title', async () => {
        var destination;
        // await browser.get('/');
        expect(await browser.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });


    it('check header links', async () => {
        // await browser.get('/');
        for (let link of headerLinks) {
            expect(await mainPage.headerRoutes.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);

        }
    });


    it('check jump to packages button', async () => {
        await mainPage.PackagesButton.click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
            expect(await mainPage.PricingTable.get(prices.indexOf(price)).getText()).toContain(price);
        }
    });


    it('check but popup', async () => {
        await mainPage.PackagesButton.click();
        await mainPage.getItButton.get(0).click();
        await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
        await browser.wait(ExpectedConditions.visibilityOf(mainPage.PaymentEmail), 5000);
        expect(await mainPage.PaymentEmail.isDisplayed()).toBeTruthy();
        expect(await $('.price').getText()).toContain(prices[0]);
        await mainPage.price.click();
        expect(await mainPage.price.getText()).toContain(prices[0]);
    });
});
