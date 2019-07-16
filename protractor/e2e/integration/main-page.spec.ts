import {browser} from "protractor";
import {MainPo} from "../support/main.po";
import {PaymentPo} from "../support/payment.po";

describe("tests for maian page", () => {

    const mainPage = new MainPo();
    const paymentPopUp = new PaymentPo();

    beforeEach(async () => {
        await mainPage.navigateTo();
    });

    it('should contain title', async () => {
        expect(await mainPage.getTitle()).toContain(MainPo.title);
    });

    it('should contain header links', async () => {
        for (let link of MainPo.headerLinks) {
            expect(await mainPage.headerRoutes.get(MainPo.headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it('should scroll to plans blocks', async () => {
        await mainPage.jumpToPackagesBtn.click();
        expect(await browser.getCurrentUrl()).toContain('#packages');
        for (let price of PaymentPo.prices) {
            expect(await mainPage.packagesPrices.get(PaymentPo.prices.indexOf(price)).getText()).toContain(price);
        }
    });

    it('should open purchasing pop-up', async () => {
        await mainPage.jumpToPackagesBtn.click();
        for (let i = 0; i < await mainPage.getItBtns.count(); i++) {
            await mainPage.getItBtns.get(i).click();

            await paymentPopUp.switchToPurchaseIframe();
            await paymentPopUp.waitForElementVisible(paymentPopUp.paymentContainer);
            expect(await paymentPopUp.emailField.isDisplayed()).toBeTruthy();
            expect(await paymentPopUp.price.getText()).toContain(PaymentPo.prices[i]);
            await paymentPopUp.changedMindBtn.click();
            expect(await paymentPopUp.price.getText()).toContain(PaymentPo.prices[i]);
            await paymentPopUp.pressEscapeBtn();
            await mainPage.switchToDefaultContent();
            await browser.sleep(2000);
        }
    });
});
