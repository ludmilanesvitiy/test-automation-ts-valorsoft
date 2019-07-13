import {browser, ExpectedConditions, protractor} from "protractor";
import {MainPo} from "../support/main.po";

describe('tests for main page', async () => {
    const mainPage = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39', '79', '299'];

    beforeEach(async () => {
        await mainPage.navigateTo();
        // await browser.get('/');
    });

    it('check page title', async () => {
        // await browser.get('/');
        // expect(await browser.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
        expect(await mainPage.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('check header links', async () => {
        // await browser.get('/');
        for (let link of headerLinks) {
            expect(await mainPage.headerRoutes.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
            // expect(await $$('ul.nav a').get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it('check jump to packages button', async () => {
        //await $('div.intro a').click();
        await mainPage.jumpToButton.click();
        //expect(await browser.getCurrentUrl()).toContain('#packages');
        expect(await mainPage.getCurrentUrl()).toContain('#packages');
        for (let price of prices) {
            //expect(await $$('.pricing-table h3').get(prices.indexOf(price)).getText()).toContain(price);
            expect(await mainPage.priceHeaders.get(prices.indexOf(price)).getText()).toContain(price);
        }
    });

    it('check buy popup', async () => {
        //await $('div.intro a').click();
        await mainPage.jumpToButton.click();

        for (let i = 0; i < await mainPage.getItButtons.count(); i++) {
            await mainPage.getItButtons.get(i).click();
            //await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
            await browser.switchTo().frame(mainPage.getItIframe.getWebElement());
            // await browser.wait(ExpectedConditions.visibilityOf($('.payment-container [name="email"]')), 5000);
            await mainPage.waitForVisible(mainPage.paymentContainerEmail, 10000);
            //expect(await $('.payment-container [name="email"]').isDisplayed()).toBeTruthy();
            expect(await mainPage.paymentContainerEmail.isDisplayed()).toBeTruthy();
            //expect(await $('.price').getText()).toContain(prices[i]);
            expect(await mainPage.getCurrentPrice()).toContain(prices[i]);
            //await $('.changed_mind_button i').click();
            await mainPage.closeButton.click();
            //expect(await $('.price').getText()).toContain(prices[i]);
            expect(await mainPage.getCurrentPrice()).toContain(prices[i]);
            //await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            await mainPage.pressEsc();
            //await browser.switchTo().defaultContent();
            await mainPage.switchToDefaultContent();
            //await browser.wait(ExpectedConditions.invisibilityOf(mainPage.getItIframe));
            await mainPage.waitForInVisible(mainPage.getItIframe);
        }
    });
});