import { browser } from 'protractor';
import { SecondPo } from '../support/second.po';

describe("tests for second page", () => {
    const secondPage = new SecondPo();
    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];

    beforeEach(async () => {
        await secondPage.navigateTo();
    });

    it('check header links', async () => {
        for (let link of headerLinks) {
            expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }
    });

    it("check download button", async () => {
        await secondPage.downloadChapter.click();
        await secondPage.waitForVisible(secondPage.firstNameInput, 5000);
        expect(await secondPage.firstNameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.firstNameInput, "balabla");
        await secondPage.sendKeys(secondPage.emailInput, "balabla@");
        await secondPage.submitButton.click();
        expect(await secondPage.errorMessage.count()).toEqual(2);
        expect(await secondPage.errorMessage.get(0).getText()).toContain("A valid email address is required.");
        await secondPage.closeButton.click();
        await secondPage.waitForInVisible(secondPage.firstNameInput);
        expect(await secondPage.firstNameInput.isDisplayed()).toBeFalsy();
    });

    it("check returning from chapter", async () => {
        await secondPage.downloadChapter.click();
        await secondPage.waitForVisible(secondPage.firstNameInput, 5000);
        expect(await secondPage.firstNameInput.isDisplayed()).toBeTruthy();
        await secondPage.sendKeys(secondPage.firstNameInput, "balabla");
        await secondPage.sendKeys(secondPage.emailInput, "test@example.com");
        await secondPage.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepsBlock.get(0), 7000);
        expect(await secondPage.stepsBlock.count()).toEqual(3);
        expect(await secondPage.getCurrentUrl()).toContain("/pending");
        await secondPage.secondPageLink.click();
        await secondPage.waitForVisible(secondPage.downloadChapter);
        expect(await secondPage.getCurrentUrl()).toContain("/2");
    });

    it("when user click on submit redirect to the pending page", async () => {
        await secondPage.scrollToElement(secondPage.bookSection);
        expect(await secondPage.bookContentSection.count()).toEqual(20);
        await secondPage.readTableContentButton.click();
        const windows = await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[1]);
        await secondPage.waitForVisible(secondPage.pdfContent, 10000);
        expect(await secondPage.getCurrentUrl()).toContain("media/ng2/ng-book-2-table-of-contents.pdf");
        await browser.switchTo().window(windows[0]);
        await secondPage.scrollToElement((secondPage.infoCardSection));
        expect(await secondPage.infoInputEmail.isDisplayed()).toBeTruthy();
        expect(await secondPage.infoSubmitButton.isDisplayed()).toBeTruthy();
        await secondPage.infoSubmitButton.click();
    });
});
