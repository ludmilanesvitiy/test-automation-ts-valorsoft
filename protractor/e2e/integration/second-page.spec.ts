import {SecondPo} from "../support/second.po";
import {browser} from "protractor";

describe('tests for second page', ()=> {
    const secondPage = new SecondPo();
    const headerLinks = ['#contents', '#testimonials', 'http://blog.ng-book.com',
        '#get-it-now', '/modern-ng1/', '/'];
    const prices = ['39', '79', '299'];

    beforeEach(async () => {
        await secondPage.navigateTo();
    });

    it('check header links', async () => {
        for (let link of headerLinks)
            expect(await secondPage.headerLinks.get(headerLinks.indexOf(link)).getAttribute('href')).toContain(link);
    });

    it('check download free chapter error case', async ()=> {
        const getChapterPopup = await secondPage.openGetChapterPopup();
        expect(await getChapterPopup.firstNameInput.isDisplayed()).toBeTruthy();
        await getChapterPopup.sendKeys(getChapterPopup.firstNameInput, 'Andrey');
        await getChapterPopup.sendKeys(getChapterPopup.emailInput, 'Andrey');
        await getChapterPopup.submitButton.click();
        expect( await getChapterPopup.errorMessages.count()).toEqual(2);
        expect( await getChapterPopup.errorMessages.get(0).getText()).toContain('A valid email address is required.');
        await getChapterPopup.closeButton.click();
        await getChapterPopup.waitForInVisible(getChapterPopup.firstNameInput);
        expect( await getChapterPopup.firstNameInput.isDisplayed()).toBeFalsy();
    });

    it('check download free chapter positive case', async ()=> {
        const getChapterPopup = await secondPage.openGetChapterPopup();
        expect(await getChapterPopup.firstNameInput.isDisplayed()).toBeTruthy();
        await getChapterPopup.sendKeys(getChapterPopup.firstNameInput, 'Andrey');
        await getChapterPopup.sendKeys(getChapterPopup.emailInput, 'test@test.com');
        await getChapterPopup.submitButton.click();
        await secondPage.waitForVisible(secondPage.stepsBlock.get(0), 6000);
        expect(await secondPage.stepsBlock.count()).toEqual(3);
        expect( await secondPage.getCurrentUrl()).toContain('https://www.ng-book.com/pending/');
        await secondPage.secondPageLink.click();
        await secondPage.waitForVisible(secondPage.downloadChapterButton);
        expect( await secondPage.getCurrentUrl()).toContain('https://www.ng-book.com/2/');
    });

    it('check scroll', async () => {
        await secondPage.scrollToElement(secondPage.bookSection);
        expect( await secondPage.bookContentSection.count()).toEqual(20);
        await secondPage.readTableContentButton.click();
        const windows = await browser.getAllWindowHandles();
        await browser.switchTo().window(windows[1]);
        await secondPage.waitForVisible(secondPage.pdfContent);
        expect( await secondPage.getCurrentUrl()).toContain('media/ng2/ng-book-2-table-of-contents.pdf');
        await browser.switchTo().window(windows[0]);
        await secondPage.scrollToElement(secondPage.infoCardSection);
        expect(await secondPage.infoEmailInput.isDisplayed()).toBeTruthy();
        expect(await secondPage.infoSubmitButton.isDisplayed()).toBeTruthy();
        await secondPage.infoSubmitButton.click();

    });
});