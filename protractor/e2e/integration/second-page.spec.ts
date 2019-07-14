import {$, $$, browser, ExpectedConditions, protractor} from "protractor";
import {secondPo} from "../support/second.po";
import {BaseComponent} from "../support/base.component";

describe('Second page tests', () => {
    const SP = new secondPo();
    const headerLinks = ['#contents', '#testimonials', 'blog.ng-book.com',
        '#get-it-now', 'modern-ng1', '/'];
    const prices = ['39', '79', '99'];

    beforeEach(async () => {
        await SP.navigateTo();
    });


    it('Check header links second page', async () => {
        for (let link of headerLinks) {
            expect(await SP.headerButtons.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
        }

    });

    it('Download free chapter negative case ', async () => {
        await SP.downloadFirstChapterButton.click();
        await SP.waitForVisible(SP.firstNameInput);
        expect(await SP.firstNameInput.isDisplayed()).toBeTruthy();
        await SP.sendKeysWithClear(SP.firstNameInput, "name");
        await SP.sendKeysWithClear(SP.emailInput, "WrongEmail");
        await SP.submitButton.click();
        expect(await SP.errorMessages.count()).toEqual(2);
        expect(await SP.errorMessages.get(0).getText()).toContain('A valid email address is required.');
        await SP.popUpCloseButton.click();
        await SP.waitForInVisible(SP.emailInput);
        expect(await SP.firstNameInput.isDisplayed()).toBeFalsy();
    });

    it('Download free chapter pending ', async () => {
        await SP.downloadFirstChapterButton.click();
        await SP.waitForVisible(SP.firstNameInput);
        expect(await SP.firstNameInput.isDisplayed()).toBeTruthy();
        await SP.sendKeysWithClear(SP.firstNameInput, "name");
        await SP.sendKeysWithClear(SP.emailInput, "Email@test.com");
        await SP.submitButton.click();
        await SP.waitForVisible(SP.steps.get(0), 8000);
        expect(await SP.steps.count()).toEqual(3);
        expect(await SP.getCurrentUrl()).toContain("pending");
        await SP.secondPageLinkTo2.click();
        await SP.waitForVisible(SP.downloadFirstChapterButton);
        expect(await SP.getCurrentUrl()).toContain("www.ng-book.com/2/");
    });

    it('Book content ', async () => {
       await SP.scrollToElement(SP.bookContentBlock);
       expect(await SP.tableElements.count()).toEqual(20);
       await SP.readFullBtn.click();
       const windows = await browser.getAllWindowHandles();
       await browser.switchTo().window(windows[1]);
       await SP.waitForVisible(SP.pdfContent);
       expect(await SP.getCurrentUrl()).toContain("ng-book-2-table-of-contents.pdf");
       await browser.switchTo().window(windows[0]);
       await SP.scrollToElement(SP.infoCard);
       expect(await SP.infoCardEmailInput.isDisplayed()).toBeTruthy();
       expect(await SP.infoCardSubmit.isDisplayed()).toBeTruthy();
       await SP.infoCardSubmit.click();
    });

    it('HOME WORK 2 TEST', async () => {
        await SP.headerButtons.get(2).click();
        expect(await SP.getCurrentUrl()).toContain("//blog.ng-book.com/");
        expect(await SP.articles.count()).toEqual(20);
        expect(await SP.articleHeader.count()).toEqual(20);
        expect(await SP.articleDesc.count()).toEqual(20);
        expect(await SP.readMoreBtn.count()).toEqual(20);
        expect(await SP.firstPage.isDisplayed()).toBeTruthy();
        expect(await SP.pageOne.isDisplayed()).toBeTruthy();
        expect(await SP.pageTwo.isDisplayed()).toBeTruthy();
        expect(await SP.nextPage.isDisplayed()).toBeTruthy();
        expect(await SP.lastPage.isDisplayed()).toBeTruthy();
        await SP.pageTwo.click();
        expect(await SP.getCurrentUrl()).toContain("/page/2/");
        expect(await SP.articles.count()).not.toEqual(0);
    });
});