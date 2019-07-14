import {browser, $$, element, $, ExpectedConditions} from "protractor";
import {protractor} from "protractor/built/ptor";
import {MainPo} from "../support/main.po";
import {SecondPage} from "../support/ng2.po";

describe('Main page test suite', () => {
    const secondPage = new SecondPage();
    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com/', '#get-it-now', '/modern-ng1/'];
    const prices = ['39', '79', '299'];

    beforeEach(async () =>  {
        await secondPage.navigateTo();
    })
    it('Check header links', async () => {
        for (let link of headerLinks)
        expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link)
    });
    it('Download free chapter error case', async () => {
        await secondPage.downloadFirstChapter.click();
        await secondPage.waitForVisible(secondPage.firstNameField)
        expect(await secondPage.isElementDisplayed(secondPage.firstNameField));
        await secondPage.sendKeys(secondPage.firstNameField, 'Name');
        await secondPage.sendKeys(secondPage.emailField, 'wfwefwefwe');
        await secondPage.submitButton.click();
        expect(await secondPage.fieldsWithError.count()).toEqual(2);
        await secondPage.closeButton.click();
        await secondPage.waitForInvisible(secondPage.firstNameField)
        expect(await secondPage.firstNameField.isDisplayed()).toBeFalsy();

    });

    it('check header links',async () => {
        await secondPage.downloadFirstChapter.click();
        await secondPage.waitForVisible(secondPage.firstNameField);
        await secondPage.sendKeys(secondPage.firstNameField, 'Oleg');
        await secondPage.sendKeys(secondPage.emailField, 'test@test.test');
        await secondPage.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepsBlock.get(0));
        expect(await secondPage.stepsBlock.count()).toEqual(3);
        expect(await secondPage.getCurrentUrl()).toContain('pending');
        await secondPage.secondPageLink.click();
        await secondPage.waitForVisible(secondPage.downloadFirstChapter);
        expect(await secondPage.getCurrentUrl()).toContain('2');
    });

    it('When user click on submit redirect to the pending page',async () => {
        await secondPage.scrollToElement(secondPage.bookSection);
        expect(await secondPage.bookContentSection.count()).toEqual(20);
        await secondPage.readFullButton.click();
        const windows = await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[1]);
        await secondPage.waitForVisible(secondPage.pdfContents, 10000);
        expect(await secondPage.getCurrentUrl()).toContain(secondPage.pdfFileLink);
        await browser.switchTo().window(windows[0]);
        await secondPage.scrollToElement(secondPage.infoCardSection);
        expect(await secondPage.isElementDisplayed(secondPage.infoEmailInput));
        expect(await secondPage.isElementDisplayed(secondPage.infoSubmitButton));
        await secondPage.infoSubmitButton.click();
    });


});