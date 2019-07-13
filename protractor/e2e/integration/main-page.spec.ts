import {MainPo} from "../support/main.po";

describe('tests for main page', ()=>{
    const mainPage = new MainPo();
    const headerLinks = ['blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const prices = ['39','79','299'];

    beforeEach(async()=>{
        await mainPage.navigateTo();
    });

    it('check page titlle', async ()=>{
        expect(await mainPage.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('check header links', async ()=>{
        for (let link of headerLinks)
        expect(await mainPage.headerRoutes.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
    });

    it('check scroll to the block packages', async ()=>{
       await mainPage.jumpToButton.click();
       expect(await mainPage.getCurrentUrl()).toContain('#packages');
        for (let price of prices)
            expect(await mainPage.priceHeaders.get(prices.indexOf(price)).getText()).toContain(price);
    });

    it('check but popup', async ()=>{
        await mainPage.jumpToButton.click();
        for(let i = 0; i<await mainPage.getItButtons.count(); i++) {
            await mainPage.waitForVisible(mainPage.getItButtons.get(i));
            await mainPage.getItButtons.get(i).click();
            const paymentPopup = await mainPage.openPaymentPopup();
            await paymentPopup.waitForVisible(paymentPopup.paymentContainerEmail);
            expect(await paymentPopup.paymentContainerEmail.isDisplayed()).toBeTruthy();
            expect(await paymentPopup.getCurrentPrice()).toContain(prices[i]);
            await paymentPopup.closePaymentPopup();
            expect(await mainPage.getCurrentPrice()).toContain(prices[i]);
            await mainPage.pressEsc();
            await mainPage.switchToDefaultContent();
            await mainPage.waitForVisible(mainPage.getItButtons.get(i), 6000);
        }
    });
});